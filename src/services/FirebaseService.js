import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from "../constants/config";
import AuthService from "./firebase/AuthService";

console.log("firebaseConfig", firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const authService = new AuthService(auth, googleProvider);

export { authService };
