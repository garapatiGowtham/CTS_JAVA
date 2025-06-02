
const events = [
  { name: "Jazz Night", category: "Music" },
  { name: "Baking Workshop", category: "Food" },
  { name: "Rock Concert", category: "Music" }
];

// Add new event
events.push({ name: "Painting Class", category: "Art" });

// Filter music events
const musicEvents = events.filter(e => e.category === "Music");

// Map to formatted display
const displayCards = musicEvents.map(e => `Event: ${e.name} (Music)`);

console.log(displayCards);

