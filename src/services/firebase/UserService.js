import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
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
      })
    });
  };

  updateUser = (userId, params) => {
    return updateDoc(doc(this.firestore, FBCollections.USERS, userId), params);
  };
}
