// DOM => document object module
//querySelector ->  1. in case of multiple outcomes, it will give the first one
// With NodeList, forEach will work, but not with HTMLCollection.

// console.log("console.log",document); //basic view
// console.dir(document); //js view

// console.log(typeof document); //object

//m-1
// console.log(document.getElementById("main-heading")); 
// console.log(typeof document.getElementById("main-heading") ); //object
// console.dir(document.getElementById("main-heading")); //js view

// m-2
// console.log(document.querySelector("#main-heading")); 
// const navItem=document.querySelector(".nav-item");
// console.log(navItem); //1st element

// const navItemsAll=document.querySelectorAll(".nav-item");
// console.log(navItemsAll); //NodeList array like object
// console.log(Array.isArray(navItemsAll)); //false
// console.log(navItemsAll[1]);
// console.log(navItemsAll[100]); //undefined

// //m-3
// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading.textContent); //all textContent
        //o/p-> Manage your tasks Hello
        //displayed-content ->Manage your tasks         (Hello's display none)
// mainHeading.textContent="this is new content of main-heading"; //changes
// console.log(mainHeading.textContent); 

//m-4
// console.log(mainHeading.innerText); //displayed-text


//style
// const mainHeading1=document.querySelector("div.headline h2");
// console.log(mainHeading1); 
// console.log(mainHeading1.style);
// mainHeading1.style.color="green";
// mainHeading1.style.backgroundColor="yellow"; //camelCase


//m-5
// const link=document.querySelector("a");
// console.log(link);
// console.log(link.getAttribute("href"));//#Home

//m-6
// link.setAttribute("href","google.com");
// console.log(link.getAttribute("href"));

// const linkAttri=link.getAttribute("href");
// console.log(linkAttri);
// const sliceLinkAttri=linkAttri.slice(5); //index
// //e.com     (index [5,end] )
// console.log(sliceLinkAttri);

//m-7 
// const navItems1=document.getElementByClassName("nav-item");          //error
// const navItems1=document.getElementsByClassName("nav-item");
// console.log(navItems1);                  //HTMLCollection array like (li.nav-item)
// console.log(navItems1[2]);
// const navItems2=document.querySelectorAll(".nav-item");      //NodeList as previously


//loop
// for(let i=0;i<navItems1.length;i++)
// {
    // console.log(navItems1[i]);
    // navItems1[i].style.color="yellow";           //List-1 color-> green
    // no effect because we have to change the color of anchor tag not it's parent li tag
    // navItems1[i].style.backgroundColor="black";      //working parents bg 
// }

// const navItems1=document.getElementsByTagName("a");
// // console.log(navItems1); // HtmlCollection (a)
// for(let i=0;i<navItems1.length;i++)
// {
//     // console.log(navItems1[i]);
//     navItems1[i].style.color="green";             //working
//     navItems1[i].style.backgroundColor="black";   //working parents bg 
// }

//can use (for-of ) but forEach etc can't
//for *forEach* we can convert HtmlCollection into array

// let navItems2=document.getElementsByTagName("a");
// console.log(typeof navItems2);
// console.log(navItems2); 
// navItems2=Array.from(navItems2);
// console.log(navItems2 instanceof Array); //true

//all elements present in whole html file
// const navItems=document.getElementsByTagName("button");
// console.log(navItems);

let navItems=document.querySelectorAll("a");
// console.log(navItems); //NodeList ===!Array
//can use for, for-of ***and forEach also***
//why forEach
// navItems.forEach(function(navitem)
// {
//     console.log(navitem);
//     navitem.style.color="green";
// })




