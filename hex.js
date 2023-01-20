const btn = document.getElementById("btn");
const colorContent = document.getElementById("colorcontent");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener('click', ()=>{
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        hexColor = hexColor + hexValues[random()];
    }
    document.body.style.backgroundColor = hexColor;
    colorContent.innerHTML = hexColor;
})

function random(){
    let x = Math.floor(Math.random() * hexValues.length);
    return x;
}
