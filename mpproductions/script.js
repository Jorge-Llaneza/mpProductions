const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav ul");

toggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});

const form = document.querySelector(".contact form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! This form isn't wired up to send messages yet — email us directly for now.");
});
