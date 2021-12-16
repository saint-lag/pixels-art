// Pixel Board: Default --> 5x5
function createsPixelBoard(size) {
  const intSize = parseInt(size);
  const pixelBoard = document.querySelector('#pixel-board');
  const pixelDiv = document.createElement('div');
  const pixelLine = document.createElement('div');

  // Pixel 
  pixelLine.className = 'pixelLine';

  // PixelDiv
  const pixelDivs = document.querySelectorAll('.pixel');
  pixelDiv.style.width = '40px';
  pixelDiv.style.height = '40px';
  pixelDiv.style.border = '1px solid black';
  pixelDiv.style.display = 'inline-block';
  pixelDiv.className = 'pixel';
  pixelDiv.style.background = 'white';
  pixelDiv.style.lineHeight = '0px';


  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }

  if (intSize <= 50 && intSize > 5) {
    for (let i = 0; i < intSize; i += 1) {
      pixelBoard.appendChild(pixelLine.cloneNode(true));
    } for (let pixelLine of document.querySelectorAll('.pixelLine')) {
      for (let i = 0; i < intSize; i += 1) {
        pixelLine.appendChild(pixelDiv.cloneNode(true));
      }
    }
  } else {
    for (let i = 0; i < 5; i += 1) {
      pixelBoard.appendChild(pixelLine.cloneNode(true));
    } for (let pixelLine of document.querySelectorAll('.pixelLine')) {
      for (let i = 0; i < 5; i += 1) {
        pixelLine.appendChild(pixelDiv.cloneNode(true));
      }
    }
  }

}


createsPixelBoard();

// Random Colors

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

// Default: Cyan Magenta Colors
// Refresh: Random Colors

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

// Selected Color: Defines selected color of Pallete Colors

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

// Pixel Color Change: Changes color of clicked pixel

function pixelColorChanger() {
  for (let pixel of document.querySelectorAll('.pixel')) {
    pixel.addEventListener('click', function () {
      pixel.style.transition = '0.5s';
      pixel.style.background = selectedColor;
    });
  }
}

pixelColorChanger();

// Clear Board: Clears Board when click event

const clearBoardButton = document.querySelector('#clear-board');

clearBoardButton.addEventListener('mouseover', function (event) {
  event.target.style.transition = '0.5s';
  event.target.style.transform = 'scale(1.05)';
});

clearBoardButton.addEventListener('mouseout', function (event) {
  event.target.style.transition = '0.5s';
  event.target.style.transform = 'scale(1.0)';
});

function clearBoard() {
  clearBoardButton.addEventListener('click', function () {
    for (let pixel of document.querySelectorAll('.pixel')) {
      pixel.style.background = 'white';
      pixel.style.transition = '1.2s';
    }
  });
}

clearBoard();

// Cyan Magenta Yellow Button: Turns back to Default Colors

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

// Size Buttons: User Chooses Pixel Board Size
const sizeButtons = document.querySelectorAll('.size-button');

for (let button of sizeButtons) {
  button.addEventListener('mouseover', function (event) {
    event.target.style.transition = '0.5s';
    event.target.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseout', function (event) {
    event.target.style.transition = '0.5s';
    event.target.style.transform = 'scale(1.0)';
  });
  button.addEventListener('click', function (event) {
    const pixelBoard = document.querySelector('#pixel-board');

    while (pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.firstChild);
    }

    let size = event.target.id.replace(/[^0-9]/g, '');
    console.log(size);
    createsPixelBoard(size);
    pixelColorChanger();
    clearBoard();
  });
}


// Input Size

const sizeInput = document.querySelector('#board-size');
const generateButton = document.querySelector('#generate-board');

generateButton.addEventListener('click', function () {

  if (sizeInput.value !== '') {
    if (sizeInput.value > 50) {
      clearBoard();
      createsPixelBoard(50);
      pixelColorChanger();
    } else {
      clearBoard();
      createsPixelBoard(sizeInput.value);
      pixelColorChanger();
    }
  } else {
    alert('Board inválido!');
  }
});