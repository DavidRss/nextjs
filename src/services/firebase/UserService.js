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

export default class UserService {
  constructor(firestore) {
    this.firestore = firestore;
  }

  getUser = (userId) => {
    return getDoc(doc(this.firestore, FBCollections.USERS, userId));
  };

  saveUser = (userId, params) => {
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
    return updateDoc(doc(this.firestore, FBCollections.USERS, userId), params);
  };

  updateReferrals = (referralCode, userId) => {
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
          const referrals = user.referrals;
          if (!referrals.includes(userId)) {
            referrals.push(userId);
            console.log("===== referrals", referrals);
            await updateDoc(
              doc($this.firestore, FBCollections.USERS, user.id),
              {
                referrals,
              }
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
