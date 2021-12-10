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
const randomColor = document.querySelector('#random-color');
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

randomColor.addEventListener('click', function () {
  const color = parseInt(Math.random() * (availableColors.length + 1 - 0) + 0);
  randomColor.style.background = availableColors[color];
});

// Selected Color
const colorsButton = document.querySelectorAll('.color');
let currentSelectedButton = document.querySelector('.selected');
let selectedColor = 'black';

for (let color of colorsButton) {
  color.addEventListener('click', function () {
    currentSelectedButton.classList.remove('selected');
    color.classList.add('selected');
    currentSelectedButton = color;
    selectedColor = currentSelectedButton.style.background;
  });
}

// Pixel Color Change
const pixels = document.querySelectorAll('.pixel');

for (let pixel of pixels) {
  pixel.addEventListener('click', function () {
    pixel.style.background = selectedColor;
  });
}

// Clear Board
const clearBoardButton = document.querySelector('#clear-board');

clearBoardButton.addEventListener('click', function () {
  for (let pixel of pixels) {
    pixel.style.background = 'white';
  }
});
