for (let i = 0; i < 5; i++) {
  let elementoDaLinha = document.createElement('div');
  let linhas = document.getElementById('pixel-board');
  linhas.appendChild(elementoDaLinha);

  for (let j = 0; j < 5; j++) {
    let elementoDaColuna = document.createElement('div');
    let colunas = document.getElementById('pixel-board').lastChild;
    colunas.appendChild(elementoDaColuna);
    elementoDaColuna.className = 'pixel';
  }
}

function colorSelect(color) {
  const actualColor = document.querySelector('.selected');
  actualColor.classList.remove('selected');
  color.target.classList.add('selected');
}
const paletaDeCores = document.querySelector('#color-palette');
paletaDeCores.addEventListener('click', colorSelect);

//getComputedStyle

function changeColor(pixel){
  const actualColor = document.querySelector('.selected')
  const pixelSelected = pixel.target;
  pixelSelected.id = actualColor.id;
}

const board = document.getElementById('pixel-board');
board.addEventListener('click', changeColor);