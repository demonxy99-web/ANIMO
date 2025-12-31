const animeList = document.getElementById("animeList");

const data = [
  {
    id: "tokyo",
    title: "Tokyo Revengers",
    poster: "https://i.imgur.com/xxxx.jpg"
  }
];

data.forEach(anime => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${anime.poster}">
    <h3>${anime.title}</h3>
  `;
  card.onclick = () => {
    localStorage.setItem("animeId", anime.id);
    location.href = "anime.html";
  };
  animeList.appendChild(card);
});