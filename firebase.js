<script type="module">
  // Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyDRDsqBFjIXp6mh8LO431Usd-Rmpw5pTDM",
    authDomain: "animo-ab129.firebaseapp.com",
    projectId: "animo-ab129",
    storageBucket: "animo-ab129.appspot.com",
    messagingSenderId: "806187073262",
    appId: "1:806187073262:web:28fb98cbf9a25a214ffdff"
  };

  // Init Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
  export const db = getFirestore(app);
</script>