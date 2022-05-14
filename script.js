import { imageMode } from "./helperFunctions/imageMode.js";
import { iconTextMode } from "./helperFunctions/iconTextMode.js";
import { navTextBgColor } from "./helperFunctions/navTextBgColor.js";
import { switchTo } from "./helperFunctions/switchTo.js";

const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const aboutContainer = document.querySelector(".about-container");
let currentTheme = localStorage.getItem("theme");

// Toggle light and dark theme.
function modeToggled(color) {
  iconTextMode(color, toggleIcon);
  imageMode(color, aboutContainer);
  navTextBgColor(color, nav, textBox);
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    switchTo("dark", modeToggled);
  } else {
    switchTo("light", modeToggled);
  }
}

// Check Local Storage For Theme
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleModeSwitch("dark");
  } else {
    //initial theme
    currentTheme = localStorage.setItem("theme", "light");
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
