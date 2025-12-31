const url = localStorage.getItem("videoUrl");
const type = localStorage.getItem("videoType");

const player = document.getElementById("player");

if (type === "youtube" || type === "drive") {
  player.src = url;
}