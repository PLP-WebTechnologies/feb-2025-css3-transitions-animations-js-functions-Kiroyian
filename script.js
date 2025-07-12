// Load saved theme and data
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const savedName = localStorage.getItem("name");
  const savedMsg = localStorage.getItem("message");

  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add("light-theme");
  }

  if (savedName && savedMsg) {
    document.getElementById("output").textContent = Welcome back, ${savedName}: "${savedMsg}";
  }
};


// Theme toggle
function toggleTheme() {
  const isLight = document.body.classList.contains("light-theme");
  document.body.classList.toggle("light-theme", !isLight);
  document.body.classList.toggle("dark-theme", isLight);

  localStorage.setItem("theme", isLight ? "dark-theme" : "light-theme");
}

// Save input to localStorage
document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (name && message) {
    localStorage.setItem("name", name);
    localStorage.setItem("message", message);
    document.getElementById("output").textContent = Thanks, ${name}: "${message}";
  } else {
    alert("Please fill in both fields.");
  }
});