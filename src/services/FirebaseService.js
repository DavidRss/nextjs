import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from "../constants/config";

console.log("firebaseConfig", firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
