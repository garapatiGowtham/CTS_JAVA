
// Using .then()
fetch("https://mockapi.io/events")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching events:", error));

// Using async/await
async function loadEvents() {
  try {
    const response = await fetch("https://mockapi.io/events");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

loadEvents();

