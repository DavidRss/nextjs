import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { FBCollections } from "../FirebaseService";

export default class ProjectService {
  constructor(firestore) {
    this.firestore = firestore;
  }

  getProject = (projectId) => {
    return getDoc(doc(this.firestore, FBCollections.PROJECTS, projectId));
  };

  saveProject = (projectId, params) => {
    return setDoc(doc(this.firestore, FBCollections.PROJECTS, projectId), params);
  };

  updateProject = (projectId, params) => {
    return updateDoc(doc(this.firestore, FBCollections.PROJECTS, projectId), params);
  };
}
