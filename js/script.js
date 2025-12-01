document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // Burger Menu (only if exists)
  // -------------------------------
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // -------------------------------
  // Mood selection
  // -------------------------------
  const moods = document.querySelectorAll(".mood-option");
  if (moods.length > 0) {
    moods.forEach((mood) => {
      mood.addEventListener("click", () => {
        moods.forEach((m) => m.classList.remove("active"));
        mood.classList.add("active");
      });
    });
  }
});
