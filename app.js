import { renderDashboard } from "./dashboard.js";
import { renderDetail } from "./detail.js";

if (window.location.search.includes("?country")) {
  renderDetail();
} else {
  document.querySelector(".nav").classList.add("active");
  renderDashboard();
}

const darkModeButton = document.querySelector(".darkMode");
let theme = localStorage.getItem("theme") || "light";

darkModeButton.addEventListener("click", () => {
  if (theme === "dark") {
    document.querySelector("body").classList.remove("dark");
    theme = "light";
  } else {
    document.querySelector("body").classList.add("dark");
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.querySelector("body").classList.add("dark");
}
