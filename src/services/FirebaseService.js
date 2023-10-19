import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../constants/config";
import AuthService from "./firebase/AuthService";
import UserService from "./firebase/UserService";
import ProjectService from "./firebase/ProjectService";

export const FBCollections = {
  USERS: "users",
  PROJECTS: "projects",
  PARTICIPANTS: "participants",
  COMMENTS: "comments"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const authService = new AuthService(auth, googleProvider);
const userService = new UserService(firestore);
const projectService = new ProjectService(database, firestore);

export { database, authService, userService, projectService };
