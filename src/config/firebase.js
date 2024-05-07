import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebase = {
    apiKey: "AIzaSyCSFuOLTPui1VzQwSNSdE41s5c2Qfg4T5g",
    authDomain: "mommygk-24714.firebaseapp.com",
    projectId: "mommygk-24714",
    storageBucket: "mommygk-24714.appspot.com",
    messagingSenderId: "1033519774149",
    appId: "1:1033519774149:web:5a8ae06e29ea320840f3ac"
  };

const app = initializeApp(firebase);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);