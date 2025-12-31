import { db } from "../firebase.js";
import {
  collection, addDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

document.getElementById("addAnime").onclick = async () => {
  await addDoc(collection(db, "anime"), {
    title: animeTitle.value,
    poster: animePoster.value,
    views: 0
  });
  alert("Anime added");
};

document.getElementById("addSeason").onclick = async () => {
  await addDoc(collection(db, "anime", animeId.value, "seasons"), {
    name: seasonName.value
  });
  alert("Season added");
};

document.getElementById("addEpisode").onclick = async () => {
  await addDoc(collection(
    db, "anime", animeId.value, "seasons", seasonId.value, "episodes"
  ), {
    title: epTitle.value,
    videoUrl: videoUrl.value,
    videoType: videoType.value
  });
  alert("Episode added");
};