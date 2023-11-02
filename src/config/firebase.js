import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4GDSy2ghsmaL2CUNJfQQcvUh9KnmbbHA",
  authDomain: "site-audit-6be74.firebaseapp.com",
  projectId: "site-audit-6be74",
  storageBucket: "site-audit-6be74.appspot.com",
  messagingSenderId: "796304465032",
  appId: "1:796304465032:web:dcefd9c3acef9d7c62533d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
