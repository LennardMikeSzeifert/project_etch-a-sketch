const container = document.querySelector(`.container`);

for (let i = 0; i < 256; i++) {
  const div = document.createElement(`div`);
  div.className = `square-div`;
  container.appendChild(div);
}
