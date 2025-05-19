function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function showRandomHexColor(color) {
  document.body.style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
}

const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  showRandomHexColor(getRandomHexColor());
});
