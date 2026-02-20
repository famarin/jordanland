import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKUJON_e3zKvmsbgXjG2Dkov9d_S0sNf0",
  authDomain: "jordan-land.firebaseapp.com",
  projectId: "jordan-land",
  storageBucket: "jordan-land.firebasestorage.app",
  messagingSenderId: "1067514110193",
  appId: "1:1067514110193:web:e72a806e08bd6f55518950",
  measurementId: "G-NKENDT0QVV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
