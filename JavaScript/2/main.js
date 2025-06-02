
const eventName = "Community Cleanup";
const eventDate = "2025-06-30";
let availableSeats = 25;

console.log(`Event: ${eventName}, Date: ${eventDate}, Seats available: ${availableSeats}`);

// Simulate registration - decrease seats
availableSeats--;
console.log(`Seats after registration: ${availableSeats}`);

// Simulate cancellation - increase seats
availableSeats++;
console.log(`Seats after cancellation: ${availableSeats}`);

