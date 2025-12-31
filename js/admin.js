import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

document.getElementById("addBtn").addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const desc = document.getElementById("desc").value;

  if (!title || !image || !desc) {
    document.getElementById("status").innerText = "❌ Fill all fields";
    return;
  }

  try {
    await addDoc(collection(db, "anime"), {
      title: title,
      image: image,
      description: desc,
      createdAt: new Date()
    });

    document.getElementById("status").innerText = "✅ Anime added";
  } catch (e) {
    document.getElementById("status").innerText = "❌ Error";
  }
});