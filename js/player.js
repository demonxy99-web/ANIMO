const url = localStorage.getItem("videoUrl");
const type = localStorage.getItem("videoType");

const player = document.getElementById("player");

if (type === "youtube" || type === "drive") {
  player.src = url;
}
import { auth, db } from "../firebase.js";
import {
  addDoc, collection, doc, updateDoc, increment
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const user = auth.currentUser;
if (user) {
  await addDoc(collection(db, "users", user.uid, "history"), {
    animeId: localStorage.getItem("animeId"),
    watchedAt: Date.now()
  });

  await updateDoc(doc(db, "anime", localStorage.getItem("animeId")), {
    views: increment(1)
  });
}