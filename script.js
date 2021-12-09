// Pixel Board
const pixelBoard = document.querySelector('#pixel-board');
const pixelDiv = document.createElement('div');
pixelDiv.style.width = '40px';
pixelDiv.style.height = '40px';
pixelDiv.style.border = '1px solid black';
pixelDiv.style.display = 'inline-block';
pixelDiv.style.margin = '0.1em';
pixelDiv.className = 'pixel';

for (let i = 0; i < 25; i += 1) {
  pixelBoard.appendChild(pixelDiv.cloneNode(true));
}

// Random Color
const randomColors = document.querySelectorAll('.random-color');
const randomColorsButton = randomColors[0];
const availableColors = [
  'red',
  'maroon',
  'orange',
  'olive',
  'greenyellow',
  'green',
  'lime',
  'teal',
  'blue',
  'navy',
  'blueviolet',
  'purple',
];

randomColorsButton.addEventListener('click', function () {
  const color = parseInt(Math.random() * (availableColors.length + 1 - 0) + 0);
  randomColorsButton.style.background = availableColors[color];
});

// Selected Color
const colorsButton = document.querySelectorAll('.color');

for (let color of colorsButton) {
  color.addEventListener('click', function () {
    color.classList.add = 'selected';
  });
}
