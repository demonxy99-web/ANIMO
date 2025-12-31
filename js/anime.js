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