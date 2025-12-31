import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "animo-ab129.firebaseapp.com",
  projectId: "animo-ab129",
  storageBucket: "animo-ab129.appspot.com",
  messagingSenderId: "806187073262",
  appId: "1:806187073262:web:28fb98cbf9a25a214ffdff"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);