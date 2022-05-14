// Switch Theme
export function switchTo(color, modeToggled) {
  document.documentElement.setAttribute("data-theme", color);
  localStorage.setItem("theme", color);
  modeToggled(color);
}
