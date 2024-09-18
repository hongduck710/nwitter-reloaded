// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyArNn33Zvi9qWwVKleg_0-mIEH4RJX1OVs",
  authDomain: "nwitter-reloaded-19a9e.firebaseapp.com",
  projectId: "nwitter-reloaded-19a9e",
  storageBucket: "nwitter-reloaded-19a9e.appspot.com",
  messagingSenderId: "316430622602",
  appId: "1:316430622602:web:b3af2d429e8d03ae25b273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);