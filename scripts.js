const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const button = document.querySelector('#clear-board');

function removeSelectedColor(e) {
  colors.forEach((color) => color.classList.remove('selected'));
  e.target.classList.add('selected');
}
function paintPixel(e) {
  const selected = document.querySelector('.selected');
  const selectedColor = getComputedStyle(selected).backgroundColor;
  e.target.style.backgroundColor = selectedColor;
}
colors.forEach((color) => color.addEventListener('click', removeSelectedColor));
pixels.forEach((pixel) => pixel.addEventListener('click', paintPixel));

function clearBoard() {
  pixels.forEach((pixel) => {
    const newPixel = pixel;
    newPixel.style.backgroundColor = 'white';
  });
}

button.addEventListener('click', clearBoard);
