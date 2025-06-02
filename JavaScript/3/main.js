
const events = [
  { name: "Cleanup", date: "2025-06-30", seats: 5 },
  { name: "Music Fest", date: "2023-12-01", seats: 0 },
  { name: "Art Workshop", date: "2025-07-10", seats: 10 },
];

const today = new Date();

events.forEach(event => {
  const eventDate = new Date(event.date);

  if (eventDate < today) {
    console.log(`${event.name} is a past event, not shown.`);
  } else if (event.seats <= 0) {
    console.log(`${event.name} is full, not shown.`);
  } else {
    console.log(`Upcoming event: ${event.name} with ${event.seats} seats.`);
  }
});

function registerForEvent(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
  } catch (error) {
    console.error(`Registration failed: ${error.message}`);
  }
}

registerForEvent(events[0]);
registerForEvent(events[1]);

