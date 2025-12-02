const container = document.querySelector(`.container`);

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement(`div`);
    grid.className = `square-div`;
    container.appendChild(grid);
  }
}
createGrid();

function setUpHoverEffect() {
  function changeBackgroundColour(e) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    e.target.style.backgroundColor = randomColor;
  }
  const grids = document.querySelectorAll(`.square-div`);

  grids.forEach((grid) => {
    grid.addEventListener(`mouseenter`, changeBackgroundColour);
  });
}
setUpHoverEffect();
const btn = document.querySelector(`.btn`);

function changeGrid() {
  const userGridChoice = prompt(
    `Please enter a number smaller than 100 to define your desired grid layout`
  );

  function removeGrid() {
    const grids = document.querySelectorAll(`.square-div`);
    grids.forEach((grid) => {
      grid.remove();
    });
  }
  removeGrid();
  function createNewGrid() {
    for (let i = 0; i < +userGridChoice * +userGridChoice; i++) {
      const grid = document.createElement(`div`);
      grid.className = `square-div`;
      container.appendChild(grid);
      const newFlexBasis = 780 / +userGridChoice;
      const newHeight = 788 / +userGridChoice;
      grid.style.flexBasis = `${newFlexBasis}px`;
      grid.style.height = `${newHeight}px`;
    }
    setUpHoverEffect();
  }
  createNewGrid();
}
btn.addEventListener(`click`, changeGrid);
