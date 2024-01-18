import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

import { firebaseConfig } from "../constants/config";
import AuthService from "./firebase/auth.service";
import UserService from "./firebase/user.service";
import ProjectService from "./firebase/project.service";
import CheckoutService from "./firebase/checkout.service";
import FileService from "./firebase/file.service";

export const FBCollections = {
  USERS: "users",
  PROJECTS: "projects",
  PARTICIPANTS: "participants",
  COMMENTS: "comments",
  REWARDS: "rewards",
};

export const FBStorage = {
  FILES: "files"
}

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const functions = getFunctions(firebaseApp);
const googleProvider = new GoogleAuthProvider();

if (process.env.REACT_APP_IS_LOCAL_MODE === "true") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

const authService = new AuthService(auth, googleProvider);
const userService = new UserService(firestore);
const projectService = new ProjectService(database, firestore);
const fileService = new FileService(storage);
const checkoutService = new CheckoutService(functions);

export {
  database,
  firestore,
  authService,
  userService,
  projectService,
  fileService,
  checkoutService,
};
