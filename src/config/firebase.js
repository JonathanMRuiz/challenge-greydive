import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYAJlk9ndhwZwpd-C1FKs1JarfdZ30rIQ",
  authDomain: "challenge-greydive-jmr.firebaseapp.com",
  projectId: "challenge-greydive-jmr",
  storageBucket: "challenge-greydive-jmr.appspot.com",
  messagingSenderId: "3615435228",
  appId: "1:3615435228:web:90cd172cde54f8c76b4719",
  measurementId: "G-K7D4XWB5BZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
