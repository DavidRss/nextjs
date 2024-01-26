import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { FBCollections } from "../FirebaseService";
import { EARN, Notification } from "../../constants/constants";

export default class UserService {
  constructor(firestore) {
    this.firestore = firestore;
  }

  getUser = (userId) => {
    return getDoc(doc(this.firestore, FBCollections.USERS, userId));
  };

  saveUser = (userId, params) => {
    console.log("===== saveUser =====");
    const $this = this;
    return new Promise((resolve, reject) => {
      setDoc(doc($this.firestore, FBCollections.USERS, userId), params)
        .then((docSnap) => {
          console.log("===== saveUser docSnap: ", docSnap);
          resolve(docSnap);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  updateUser = (userId, params) => {
    console.log("===== updateUser =====");
    return updateDoc(doc(this.firestore, FBCollections.USERS, userId), params);
  };

  updateReferrals = (username, referralCode, userId) => {
    const $this = this;
    return new Promise(async (resolve, reject) => {
      try {
        const q = query(
          collection($this.firestore, FBCollections.USERS),
          where("referralCode", "==", referralCode)
        );
        const res = await getDocs(q);
        if (!res.empty) {
          const user = res.docs[0].data();
          console.log("===== user: ", user);
          if (!user.referrals.includes(userId)) {
            user.referrals.push(userId);
            if (user.referrals.length === 1) {
              user.points = user.points + EARN.REFER;
              user.earned.referral = true;

              const notification = {
                productId: "",
                discountCode: "",
                viewed: false,
                message: `${username} used your ref you won 400 points`,
                type: Notification.Type.EARNED,
                createdAt: Date.now(),
              };
              user.notifications.unshift(notification);
            }
            // X used your ref you won 400 points
            await updateDoc(
              doc($this.firestore, FBCollections.USERS, user.id),
              user
            );
          }

          resolve(true);
        } else {
          reject("user does not exist");
        }
      } catch (err) {
        reject(err);
      }
    });
  };
}
