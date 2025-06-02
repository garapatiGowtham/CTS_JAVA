
document.querySelectorAll(".registerBtn").forEach(button => {
  button.onclick = (e) => {
    alert(`Registered for ${e.target.dataset.eventName}`);
  };
});

document.querySelector("#categoryFilter").onchange = (e) => {
  console.log(`Filter category: ${e.target.value}`);
};

document.querySelector("#searchBox").onkeydown = (e) => {
  console.log(`Key pressed: ${e.key}`);
};

