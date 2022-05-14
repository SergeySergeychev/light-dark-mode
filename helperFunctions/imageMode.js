// Set image to be in dark or light color version.
export function imageMode(color, section) {
  // Get current Theme mode and make it Opposite.
  const currTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";

  Array.from(section.children).forEach((child, index) => {
    // Current src value.
    const currSrc = child.childNodes[3].getAttribute("src");
    // Toggled src value
    const newSrc = currSrc.replace(currTheme, color);
    // Setup img elements src attribute.
    const image = document.getElementById(`image${index + 1}`);
    image.src = newSrc;
  });
}
