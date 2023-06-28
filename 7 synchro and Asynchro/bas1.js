// console.log("hello world!!");

// console.log("script start");
// let num=0;
// for(let i=0;i<10000000;i++)
//     num+=i;
// console.log(num);

//return an id
// const id=setTimeout(() => {
//     console.log("this is settimeout function");
//     const a=5;
//     console.log(Math.random(),a);
// }, 1000); //1000ms

// console.log(id); //id phle hi mil ja rhi
// clearTimeout(id); //no o/p after script end 1

//return id
// const id=setInterval(()=>{
//     console.log("hello ");
//     const a=5;
//         console.log(Math.random(),a);
// },1000);
// console.log(id);
// clearInterval(id);
//click per background rgb value


// console.log("script end 1");

//little project
// setTimeout(() => {
//     // const head1=document.querySelector(".1"); //invalid
//     // const headone=document.querySelector(".one"); 
//     // console.log(headone);
//     const head1=document.getElementsByClassName("1");
//     // console.log(head1[0]);
//     const head11=head1[0];
//     head11.style.color="violet";
//     head11.textContent="one";
// }, 1000);

// setTimeout(() => {
//     const head2=document.getElementsByClassName("2");
//     const head12=head2[0];
//     head12.style.color="green";
//     head12.textContent="two";
// }, 2000);

// setTimeout(() => {
//     const head3=document.getElementsByClassName("3");
//     const head13=head3[0];
//     head13.style.color="yellow";
//     head13.textContent="two";
// }, 3000);


//callback hell
// setTimeout(() => {
//     const head1=document.getElementsByClassName("1")[0];
//     // console.log(head1);
//     head1.style.color="violet";
//     head1.textContent="one";
//     setTimeout(() => {
//         const head2=document.getElementsByClassName("2");
//     const head12=head2[0];
//     head12.style.color="green";
//     head12.textContent="two";
//     setTimeout(() => {
//             const head3=document.getElementsByClassName("3");
//             const head13=head3[0];
//             head13.style.color="yellow";
//             head13.textContent="two";
//         }, 1000);
//     }, 1000);
// }, 1000);


// function changeText(element,text,color,time,onsuccessCallback){

//     setTimeout(() => {
//         if(element){
//             element.style.color=color;
//             element.textContent=text;
//             if(onsuccessCallback){
//                 onsuccessCallback();
//             }
//         }
//         else{
//             console.log("no element");
//         }
//     }, time);
// }

// const head1=document.getElementsByClassName("1")[0];
// const head2=document.getElementsByClassName("2")[0];
// changeText(head1,"one","violet",1000,()=>{
//     changeText(head2,"two","green",1000);
// });

// function changeText(element,text,color,time,onsuccessCallback,onfailureCallback){

//     setTimeout(() => {
//         if(element){
//             element.style.color=color;
//             element.textContent=text;
//             if(onsuccessCallback){
//                 onsuccessCallback();
//             }
//         }
//         else{
//             onfailureCallback();
//         }
//     }, time);
// }

// const head1=document.getElementsByClassName("1")[0];
// const head2=document.getElementsByClassName("2")[0];
// const head3=document.getElementsByClassName("3")[0];

// //pyramid doom
// changeText(head1,"one","violet",1000,()=>{
//     changeText(head2,"two","green",1000,()=>{
//         changeText(head3,"three","blue",1000,()=>{
//         },  ()=>{console.log("head-3 does not exist")})
//     },()=>{ console.log("head-2 does not exist");})
// },()=>{console.log("head-1 does not exist");})