// console.log("More about Promises");

// Promise.resolve("yes");
// Promise.resolve("yes").then((value)=>{
//     console.log("value is: ",value);
// })

// const myPromise=Promise.resolve("Fired Rice");
// console.log(typeof myPromise); //object

//then always returns a Promise
//Promise chain
// myPromise
//     .then((value)=>{
//         console.log("value is: ",value);
//         value+="is cooked";
//         return value; //or

//         // return Promise.resolve(value);
//         //nothing then by default return undefined
//     })
//     .then((value)=>{
//         console.log(" modified value is: ",value);
//        })


const head1=document.getElementsByClassName("1")[0];
const head2=document.getElementsByClassName("2")[0];
const head3=document.getElementsByClassName("3")[0];
const head4=document.getElementsByClassName("4")[0];
const head5=document.getElementsByClassName("5")[0];

function changeText(element,text,color,time){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(element){
                element.style.color=color;
                element.textContent=text;
                resolve();
            }
            else{
                console.log("no element");
                reject();
            }
        }, time);
    })
}

//working
// changeText(head1,"one","violet",1000);

// changeText(head1,"one","violet",1000)
//     .then(()=>{
       
//     })

// changeText(head1,"one","violet",1000)
//     .then(()=>{ changeText(head2,"two","green",1000) })


//complete
// changeText(head1,"one","violet",1000)
//     .then(()=>{ changeText(head2,"two","green",1000) })
//     .then(()=>{ changeText(head3,"three","yellow",1000) })
//     .then(()=>{ changeText(head4,"four","orange",1000) })
//     .then(()=>{ changeText(head5,"five","brown",1000) })
//problem 2-5 all at same time

changeText(head1,"one","violet",1000)
    .then(()=>{ return changeText(head2,"two","green",1000) })
    .then(()=>{ return changeText(head3,"three","yellow",1000) })
    .then(()=>{ return changeText(head4,"four","orange",1000) })
    .then(()=>  changeText(head5,"five","brown",1000) ) 
    .catch((error)=>{
        alert(error);
    })


