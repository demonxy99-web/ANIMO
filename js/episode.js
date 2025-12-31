import { db } from "../firebase.js";
import {
  collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const animeId = localStorage.getItem("animeId");
const seasonId = localStorage.getItem("seasonId");

const snap = await getDocs(
  collection(db, "anime", animeId, "seasons", seasonId, "episodes")
);

snap.forEach(doc => {
  const ep = doc.data();
  const btn = document.createElement("button");
  btn.innerText = ep.title;
  btn.onclick = () => {
    localStorage.setItem("videoUrl", ep.videoUrl);
    localStorage.setItem("videoType", ep.videoType);
    location.href = "player.html";
  };
  episodeList.appendChild(btn);
});