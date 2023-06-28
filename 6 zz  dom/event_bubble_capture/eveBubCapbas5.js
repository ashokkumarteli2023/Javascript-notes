// console.log("Bubbling");
const child=document.querySelector(".child");
const parent=document.querySelector(".parent");
const grandparent=document.querySelector(".grandparent");
const body =document.body;
// console.log(child,parent,grandparent,body);
// child.addEventListener("click",()=>{
//     console.log("clicked at child"); //if click at child->child to body
// });
// parent.addEventListener("click",()=>{
//     console.log("clicked at parent");
// });
// grandparent.addEventListener("click",()=>{
//     console
//     .log("clicked at grandparent");
// });
// body.addEventListener("click",()=>{
//     console.log("clicked at body"); //if click at body->body only
// });

// console.log("Bubbling"); //write true as a 3rd argument

// child.addEventListener("click",()=>{
//         console.log("clicked at child"); //if click at child-> body to child 
//     },true);
//     parent.addEventListener("click",()=>{
//         console.log("clicked at parent");
//     },true);
//     grandparent.addEventListener("click",()=>{
//         console
//         .log("clicked at grandparent");
//     },true);
//     body.addEventListener("click",()=>{
//         console.log("clicked at body"); //if click at body->body only
//     },true);

//event delegation
// grandparent.addEventListener("click",(e)=>{
        // console.log(e); 
        // console.log(e.target); ////if click at child then child
        // if parent then parent ....
        //add eventlistener to only one element

    // });