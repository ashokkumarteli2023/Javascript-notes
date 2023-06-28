// console.log("hello world");

//to add event there are 3 ways 
//1st in html 
//2nd by selecting element
// const btn=document.querySelector("#one");
// console.log(btn);
// console.dir(btn); //1

// btn.onclick=function()
// {
//         console.log("you clicked");
//         console.log(this); //btn content
//         console.log(btn.textContent);
//     };
    // btn.onclick=()=>
    // {
    //     console.log("you clicked");
    //     console.log(this); //window obj
    //     console.log(btn.textContent);
    // };
// console.dir(btn); //2
// both 1 and 2 is giving same o/p irrespective of function definition type doubt??? solved maybe becoz obj(btn) already initialised and we are changing obj property

//3rd 
// btn.addEventListener("click",function()
// {
//         console.log("you clicked");
//         console.log(this); //btn content
//         console.log(btn.textContent);
//     })
// btn.addEventListener("click",()=>
// {
//     console.log("you clicked");
//     console.log(this); //window obj
//     console.log(btn.textContent);
// })


// const allButtons=document.querySelectorAll(".my-buttons button");
// console.log(allButtons); //NodeList

//error allButtons is a nodelist not a node
// allButtons.addEventListener("click",()=>
// {
//     console.log("you clicked");
//     })

// for(let btn of allButtons) //for and forEach also
// {
//     btn.addEventListener("click",()=>
// {
//     console.log("you clicked");
//     });
// }

//event object
//browser 2 task ->1st- give callback function
// 2nd- event info
        

// btn.addEventListener("click",(event)=>
// { 
    // console.log("you clicked");
    // console.log(event);
    // console.log(event.currentTarget); 
    // console.log(event.target); //currentTarget-->jha defined h 
    //current   ->jo trigger kiya 

// });

// for(let btn of allButtons) //for and forEach also
// {
//     btn.addEventListener("click",(e)=>
// {
//     // console.log("you clicked");
//     console.log(e);
//     });
// }

// console.log("other events");

// document.body.addEventListener("keypress",()=>{
//     console.log("you did keypress ");
// })
// btn.addEventListener("mouseover",()=>{
//     console.log("you did mouseover at btn");
// })
// btn.addEventListener("mouseleave",()=>{
//     console.log("you did mouseleave at btn");
// })



// console.log("Browser: JS Engine + WebAPIs");
console.log("Script start");
const allButtons=document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
allButtons.forEach(button =>{
    button.addEventListener("click",e=>
    {
        let num=0;
        for(let i=0;i<100000000;i++)
            num+=i;
        console.log(e.currentTarget.textContent,num);
    })
})
let outVat=0;
for(let i=0;i<100000000;i++)
outVat+=i;
console.log("outvat",outVat);

console.log("Script end");



