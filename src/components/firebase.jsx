// src/components/firebase.jsx

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK2ifUyr9-MbwI8dsyAmbLUBoNwe7KG_o",
  authDomain: "nimbus-booking.firebaseapp.com",
  projectId: "nimbus-booking",
  storageBucket: "nimbus-booking.appspot.com",
  messagingSenderId: "1095756927348",
  appId: "1:1095756927348:web:1eaa8486a2af8c9a6d1c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
