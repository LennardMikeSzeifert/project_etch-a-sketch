const container = document.querySelector(`.container`);
const btn = document.querySelector(`.btn`);
const GRID_WIDTH = 780;
const GRID_HEIGHT = 788;

function generateGrid(size) {
  const total = size * size;
  const flexBasis = GRID_WIDTH / size;
  const height = GRID_HEIGHT / size;

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.className = "square-div";
    div.style.flexBasis = `${flexBasis}px`;
    div.style.height = `${height}px`;
    container.appendChild(div);
  }
}

container.addEventListener("mouseover", (e) => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  if (e.target.classList.contains("square-div")) {
    e.target.style.backgroundColor = randomColor;
  }
});

function removeGrid() {
  const divs = document.querySelectorAll(`.square-div`);
  divs.forEach((div) => {
    div.remove();
  });
}

function changeGridLayout() {
  const userGridChoice = prompt(
    `Please enter a number smaller than 100 to define your desired grid layout`
  );

  if (
    !userGridChoice ||
    isNaN(userGridChoice) ||
    userGridChoice > 100 ||
    userGridChoice < 1
  ) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  removeGrid();

  generateGrid(+userGridChoice);
}

generateGrid(16);

btn.addEventListener(`click`, changeGridLayout);
