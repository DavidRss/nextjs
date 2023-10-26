import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

import { firebaseConfig } from "../constants/config";
import AuthService from "./firebase/AuthService";
import UserService from "./firebase/UserService";
import ProjectService from "./firebase/ProjectService";

export const FBCollections = {
  USERS: "users",
  PROJECTS: "projects",
  PARTICIPANTS: "participants",
  COMMENTS: "comments",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const firestore = getFirestore(firebaseApp);
const functions = getFunctions(firebaseApp);
const googleProvider = new GoogleAuthProvider();

if (process.env.REACT_APP_IS_LOCAL_MODE === "true") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

const authService = new AuthService(auth, googleProvider);
const userService = new UserService(firestore);
const projectService = new ProjectService(database, firestore);

export { database, firestore, authService, userService, projectService };
