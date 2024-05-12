const ToggleButton = document.getElementById('themeToggle');
const ColorToggle = document.getElementById("ColorToggle")
const body = document.body;
const darkModeColorInput = document.getElementById('darkModeColor');


const differentColor = (Colors) => {
  body.style.backgroundColor = Colors
}
const lightDark = (DarkMode,Dark,Light) => {
  body.style.backgroundColor = DarkMode ? Dark : Light
}

ColorToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const Colors = darkModeColorInput.value;
  differentColor(Colors);
});

ToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const DarkMode = body.classList.contains('dark-mode');
  const dark = "#000"
  const light = "#fff"
  lightDark(DarkMode,dark,light)
});