// Set icon and text for light/dark mode toggle.
export function iconTextMode(color, toggleIcon) {
  const iconClass = "fa-sun";
  const textClass = "toggle-text";
  const prevIcon = color === "dark" ? "fa-sun" : "fa-moon";
  const setIcon = color === "dark" ? "fa-moon" : "fa-sun";

  // Set Text
  const modeColorText = `${color.replace(
    color.charAt(0),
    color.charAt(0).toUpperCase()
  )} Mode`;

  // Set icon
  Array.from(toggleIcon.children).forEach((child) => {
    if (child.classList.contains(textClass)) {
      child.textContent = modeColorText;
    }
    if (child.classList.contains(iconClass)) {
      child.classList.replace(prevIcon, setIcon);
    }
  });
}
