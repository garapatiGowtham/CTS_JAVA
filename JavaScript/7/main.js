
const events = [
  { name: "Jazz Night", category: "Music", seats: 5 },
  { name: "Baking Workshop", category: "Food", seats: 10 }
];

const container = document.querySelector("#eventsContainer");

events.forEach(event => {
  const card = document.createElement("div");
  card.className = "event-card";
  card.innerHTML = `<h3>${event.name}</h3><p>Category: ${event.category}</p><p>Seats: ${event.seats}</p>`;
  container.appendChild(card);
});

