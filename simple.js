const btn = document.getElementById("btn");
const colorContent = document.getElementById("colorcontent");
const colors = ['blue','red','green','yellow','purple','black','orange'];


btn.addEventListener('click', ()=>{
    let color = random(colors);
    document.body.style.backgroundColor = color;
    colorContent.innerHTML = color;
})

function random(){
    let num = colors[Math.floor(Math.random()*colors.length)];
    return num;
}


