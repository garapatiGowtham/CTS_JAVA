
form.onsubmit = (e) => {
  e.preventDefault();
  const formData = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    event: form.elements.event.value,
  };

  fetch("https://mockapi.io/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then(data => alert("Registration successful!"))
    .catch(err => alert("Registration failed!"));

  // Simulate delay
  setTimeout(() => console.log("Delayed response simulated"), 2000);
};

