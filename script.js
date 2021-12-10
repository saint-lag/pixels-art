// Pixel Board
const pixelBoard = document.querySelector('#pixel-board');
const pixelDiv = document.createElement('div');
pixelDiv.style.width = '40px';
pixelDiv.style.height = '40px';
pixelDiv.style.border = '1px solid black';
pixelDiv.style.display = 'inline-block';
pixelDiv.className = 'pixel';
pixelDiv.style.background = 'white';

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

// Not First Visit

const colorsButtons = document.querySelectorAll('.color');
if (localStorage.getItem('sessionInitiated') === 'true') {
  console.log('hi');
  for (let button of colorsButtons) {
    console.log('hi');
    const color = parseInt(
      Math.random() * (availableColors.length + 1 - 0) + 0
    );
    button.style.background = availableColors[color];
    document.getElementById('black').style.background = 'black';
  }
} else {
  localStorage.setItem('sessionInitiated', JSON.stringify(true));
}

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

clearBoardButton.addEventListener('mouseover', function (event) {
  event.target.style.transition = '0.5s';
  event.target.style.transform = 'scale(1.05)';
});

clearBoardButton.addEventListener('mouseout', function (event) {
  event.target.style.transition = '0.5s';
  event.target.style.transform = 'scale(1.0)';
});

clearBoardButton.addEventListener('click', function () {
  for (let pixel of pixels) {
    pixel.style.background = 'white';
    pixel.style.transition = '1.2s';
  }
});

const cyanMagentaYellowButton = document.querySelector('#cyan-magenta-yellow');

cyanMagentaYellowButton.addEventListener('click', function () {
  document.querySelector('#cyan').style.background = 'cyan';
  document.querySelector('#magenta').style.background = 'magenta';
  document.querySelector('#yellow').style.background = 'yellow';
  document.querySelector('#random-color').style.background = 'whitesmoke';
});

cyanMagentaYellowButton.addEventListener('mouseover', function (event) {
  event.target.style.transition = '0.5s';
  event.target.style.transform = 'scale(1.05)';
});

cyanMagentaYellowButton.addEventListener('mouseout', function (event) {
  event.target.style.transition = '0.5s';
  event.target.style.transform = 'scale(1.0)';
});
