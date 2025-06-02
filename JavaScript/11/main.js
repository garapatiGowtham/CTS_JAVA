
const form = document.getElementById("regForm");
const errorMsg = document.getElementById("errorMsg");

form.onsubmit = (e) => {
  e.preventDefault();
  const { name, email, event } = form.elements;

  if (!name.value || !email.value || !event.value) {
    errorMsg.textContent = "Please fill all fields correctly.";
  } else {
    errorMsg.textContent = "";
    alert(`Registered ${name.value} for ${event.value}`);
  }
};

