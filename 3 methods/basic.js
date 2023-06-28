// In an object method, this refers to the object.  ex. per.about2();
// Alone, this refers to the global object.         ex. console.log(this);
// In a function, this refers to the global object. ex. myobj();
// In a function, in strict mode, this is undefined. ex. myobj();
// Methods like call(), apply(), and bind() can refer this to any object.
// In an event, this refers to the element that received the event. 


"use strict";                               //or 'use strict';
// Methods  -> function inside object

const per={
    name:"NK",
    age:22,
    about1:function()
    {
        console.log("name is NK and age is 22");
    },
    about2:function()
    {
        // console.log(this);
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
// per.about1();                //it is hard coded
// per.about2(); 

// per.name="Raj";
// per.about1(); 
// per.about2();                //good

// console.log(this);                  //global object is Window
// console.log("window object: ",window);
// window.console.log(this);
// console.log(this===window); //true

function myobj()
{
    console.log(this);
    console.log("myobj function is called");
}
// myobj();         //with 'use strict' o/p undefined else complete window object with one extra myobj() function 
// window.myobj();


// myobj.call();

//call with details (imp...)
const per3={
    name:"Raj1",
    age:25,
    about3:function()
    {
        // console.log(this);
        console.log(`name is ${this.name} and age is ${this.age}`);
    },
    about33:function(gender,post)
    {
        // console.log("function about33 is called");
       console.log(this.name, this.age, gender,post);
    }
}

const per4={
    name:"Raj2 Sahu",
    age:28,
}
// per3.about3.call();              //this is undefined 
// per3.about3.call(per3);
// per3.about3.call(per4);

// per3.about33.call(per3,"male");     //last undefined 
// per3.about33.call(per4,"male","SDE");


// Apply -> same as Call just extra argument ko array me likh doh   
// per3.about33.apply(per4,["male"]);
// per3.about33.apply(per4,["male","SDE"]);


//Bind 
    //return a function ex.
const func=per3.about33.bind(per4,"male","SDE");        //no o/p of console which is inside aboout33 function
// func();


const func1=per3.about33;                //1
// console.log(func1);
// func1();                            //error -> this is undefined
// console.log(typeof func1);          //function
// func1.call(per3); //work

const func11=function(gender,post)      //2
{
   console.log(this.name, this.age, gender,post);
};
// 1===2
// func11();
// func11.call(per3,"male","sde"); //work



//Short way
const per2222={
    name:"Raj",
    age:25,
    about2:function()
    {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
// ===
const per22={
    name:"Raj",
    age:25,
    about2()
    {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

// Methods with arrow function
    //1 step out 
    // ex. not per222 but window(1 step out)
const per222={
    name:"Raj",
    age:25,
    about2:()=>
    {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
// per222.about2();
// per222.about2.call(per222);//still same