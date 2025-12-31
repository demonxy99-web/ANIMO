import { db } from "../firebase.js";
import {
  collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const animeId = localStorage.getItem("animeId");

const snap = await getDocs(collection(db, "anime", animeId, "seasons"));
snap.forEach(doc => {
  const div = document.createElement("div");
  div.innerText = doc.data().name;
  div.onclick = () => {
    localStorage.setItem("seasonId", doc.id);
    location.href = "episode.html";
  };
  seasonList.appendChild(div);
});
import { auth, db } from "../firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const favBtn = document.getElementById("favBtn");

if (favBtn) {
  favBtn.onclick = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    await addDoc(collection(db, "users", user.uid, "myList"), {
      animeId: localStorage.getItem("animeId"),
      addedAt: Date.now()
    });

    alert("❤️ Added to My List");
  };
}