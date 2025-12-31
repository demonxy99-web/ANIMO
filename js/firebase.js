// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRDsqBFjIXp6mh8LO431Usd-Rmpw5pTDM",
  authDomain: "animo-ab129.firebaseapp.com",
  projectId: "animo-ab129",
  storageBucket: "animo-ab129.firebasestorage.app",
  messagingSenderId: "806187073262",
  appId: "1:806187073262:web:28fb98cbf9a25a214ffdff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);