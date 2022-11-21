const color_names = ["red", "blue", "green", "yellow", "purple", "black", "white" , "purple" ,"pink" , "orange"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function randomGenerate() {
  let x = Math.floor(Math.random() * color_names.length);
  return x;
}

btn.addEventListener("click", () => {
  let colours = color_names[randomGenerate()];
  document.body.style.backgroundColor = colours;
  color.textContent = colours;
});
