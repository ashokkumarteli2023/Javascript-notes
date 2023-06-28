// console.log("little demo project");
//body background random color

const button=document.querySelector("button");
// console.log(button);

// console.log(Math.random()); //[0,1) decimal
// console.log(Math.random()*10); 
// console.log(Math.floor(Math.random()*10)); 
// console.log(Math.floor(Math.random()*256)); //[0,255] integer

function randomColorGenerator()
{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    // console.log(`rgb(${red},${green},${blue})`);
    return `rgb(${red},${green},${blue})`;
}

const body=document.body;
const currentColor=document.querySelector(".current-color");
console.log(currentColor);
button.addEventListener("click",()=>{
    const randomColor=randomColorGenerator();
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
})
