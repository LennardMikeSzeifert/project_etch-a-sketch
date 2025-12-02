const container = document.querySelector(`.container`);

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement(`div`);
    div.className = `square-div`;
    container.appendChild(div);
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
  const divs = document.querySelectorAll(`.square-div`);

  divs.forEach((div) => {
    div.addEventListener(`mouseenter`, changeBackgroundColour);
  });
}
setUpHoverEffect();
const btn = document.querySelector(`.btn`);

function changeGridLayout() {
  const userGridChoice = prompt(
    `Please enter a number smaller than 100 to define your desired grid layout`
  );

  function removeGrid() {
    const divs = document.querySelectorAll(`.square-div`);
    divs.forEach((div) => {
      div.remove();
    });
  }
  removeGrid();
  function createNewGrid() {
    for (let i = 0; i < +userGridChoice * +userGridChoice; i++) {
      const div = document.createElement(`div`);
      div.className = `square-div`;
      container.appendChild(div);
      const newFlexBasis = 780 / +userGridChoice;
      const newHeight = 788 / +userGridChoice;
      div.style.flexBasis = `${newFlexBasis}px`;
      div.style.height = `${newHeight}px`;
    }
    setUpHoverEffect();
  }
  createNewGrid();
}
btn.addEventListener(`click`, changeGridLayout);
