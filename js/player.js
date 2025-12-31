import { auth, db } from "../firebase.js";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// --------------------
// PLAY VIDEO
// --------------------
const url = localStorage.getItem("videoUrl");
const type = localStorage.getItem("videoType");

const player = document.getElementById("player");

if (!url || !type) {
  alert("Video not found");
} else {
  player.src = url;
}

// --------------------
// SAVE WATCH HISTORY + VIEWS
// --------------------
auth.onAuthStateChanged(async (user) => {
  if (!user) return;

  const animeId = localStorage.getItem("animeId");
  if (!animeId) return;

  try {
    // Save watch history
    await addDoc(collection(db, "users", user.uid, "history"), {
      animeId,
      watchedAt: Date.now()
    });

    // Increase views
    await updateDoc(doc(db, "anime", animeId), {
      views: increment(1)
    });

    console.log("History saved & views updated");
  } catch (err) {
    console.error("Player error:", err);
  }
});