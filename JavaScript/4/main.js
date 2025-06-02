
let totalRegistrations = 0;

function addEvent(eventsArray, newEvent) {
  eventsArray.push(newEvent);
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    totalRegistrations++;
    console.log(`User registered. Remaining seats: ${event.seats}`);
  } else {
    console.log("No seats available");
  }
}

function filterEventsByCategory(events, category, callback) {
  const filtered = events.filter(event => event.category === category);
  callback(filtered);
}

// Closure to track category registrations
function registrationTracker() {
  let count = 0;
  return function() {
    count++;
    console.log(`Total registrations: ${count}`);
  };
}

const track = registrationTracker();

const events = [
  { name: "Yoga", category: "Health", seats: 10 },
  { name: "Painting", category: "Art", seats: 5 },
  { name: "Coding", category: "Tech", seats: 15 }
];

filterEventsByCategory(events, "Tech", (events) => {
  events.forEach(e => console.log(e.name));
});

registerUser(events[2]);
track();  // Total registrations: 1

