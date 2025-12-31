// js/firebase.js

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { getAuth, signInAnonymously } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRDsqBFjIXp6mh8LO431Usd-Rmpw5pTDM",
  authDomain: "animo-ab129.firebaseapp.com",
  projectId: "animo-ab129",
  storageBucket: "animo-ab129.appspot.com",
  messagingSenderId: "806187073262",
  appId: "1:806187073262:web:XXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

// Anonymous authentication
const auth = getAuth(app);
signInAnonymously(auth)
  .then(() => console.log("✅ Firebase connected"))
  .catch((e) => console.error("❌ Firebase error", e));