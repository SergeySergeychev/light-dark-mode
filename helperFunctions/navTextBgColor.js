// Set background color for navigation and text box.
export function navTextBgColor(color, nav, textBox) {
  const white = "rgb(255 255 255 / 50%)";
  const black = "rgb(0 0 0 / 50%)";
  //Set background color for nav.
  nav.style.backgroundColor = color === "dark" ? black : white;
  //Set background color for text box
  textBox.style.backgroundColor = color === "dark" ? white : black;
}
