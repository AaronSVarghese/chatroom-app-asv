// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔁 Paste your actual config here
const firebaseConfig = {
  apiKey: "AIzaSyAp8L2c00YBYi0UcLwFTgrtkQxN3LWj4gA",
  authDomain: "react-chat-app-bddf8.firebaseapp.com",
  projectId: "react-chat-app-bddf8",
  storageBucket: "react-chat-app-bddf8.firebasestorage.app",
  messagingSenderId: "572895702372",
  appId: "1:572895702372:web:ed9821e96f9714bf4bde71"
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
