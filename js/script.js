const container = document.querySelector(`.container`);

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement(`div`);
    div.className = `square-div`;
    container.appendChild(div);
  }
}
createGrid();

const divs = document.querySelectorAll(`.square-div`);

function changeBackgroundColour(e) {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  e.target.style.backgroundColor = randomColor;
}

divs.forEach(function (div) {
  div.addEventListener(`mouseenter`, changeBackgroundColour);
});
