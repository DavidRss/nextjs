import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../constants/config";
import AuthService from "./firebase/AuthService";
import UserService from "./firebase/UserService";
import ProjectService from "./firebase/ProjectService";

export const FBCollections = {
  USERS: "users",
  PROJECTS: "projects",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const authService = new AuthService(auth, googleProvider);
const userService = new UserService(firestore);
const projectService = new ProjectService(firestore);

export { authService, userService, projectService };
