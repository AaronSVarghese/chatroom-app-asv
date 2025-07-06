// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔁 Paste your actual config here
const firebaseConfig = {
  apiKey: "AIzaSyDxazPmhBjT5djxxh9scLqX0G9lXazOGmE",
  authDomain: "chatapp-final-21203.firebaseapp.com",
  projectId: "chatapp-final-21203",
  storageBucket: "chatapp-final-21203.firebasestorage.app",
  messagingSenderId: "294238755429",
  appId: "1:294238755429:web:bfe68c1df38611138f048c"
};

// 🔌 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🗄️ Firestore instance
const db = getFirestore(app);

// 🔐 Auth + Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export all properly
export { db, auth, provider };