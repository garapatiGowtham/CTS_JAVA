
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const event1 = new Event("Book Reading", "2025-07-01", 20);

console.log(event1.checkAvailability()); // true

// List keys and values
console.log(Object.entries(event1));

