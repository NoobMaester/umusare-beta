
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs2XE-JJTJm5DhcnHowE9zOMRoip20aKw",
  authDomain: "umusare-26a90.firebaseapp.com",
  projectId: "umusare-26a90",
  storageBucket: "umusare-26a90.firebasestorage.app",
  messagingSenderId: "370246687729",
  appId: "1:370246687729:web:21ee2b59add1e3bbe08250",
  measurementId: "G-Y646K54VDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);