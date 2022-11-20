const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function randomGenerate() {
  let x = Math.floor(Math.random() * hexValues.length);
  return x;
}

btn.addEventListener("click", () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + hexValues[randomGenerate()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});