const person1={
    firstName:"Ashok",
    age:21.5,
    about(){
        return `person name is ${this.firstName}`;
    },
    isMarried()
    {
        if(this.age>25) return true;
        return false;
    }
};
console.log("start");
// console.log(person1.age);
// const perName=person1.about();
// console.log(perName);
// const perStatus=person1.isMarried();
// console.log(perStatus);


// what is I need 1cr person details
// function let's see
function createPersonInfo(firstName,age)
{
    const obj={};
    obj.firstName=firstName;
    obj.age=age;
    obj.about=function(){
        return `person name is ${this.firstName}`;
    };
    obj.isMarried=function(){
        if(this.age>21) return true;
        return false;
    };
    return obj;
}
const person11=createPersonInfo("Ashok Kumar Teli",22);
// console.log(person11.firstName);
// const perInfo11=person11.about();
// console.log(perInfo11);

const person12=createPersonInfo("Abhishek Kumar Teli",17.5);
// console.log(person12.firstName);
// const perInfo12=person12.about();
// console.log(perInfo12);


// again and again we are creating about and isMarried method
// solution
const methodObj={
    about111()
    {
        return `${this.firstName} age is ${this.age}`; //uppr mistake hai
    },
    isMarried111()
    {
        if(this.age>21) return true;
        return false;
    },
    //after some time
    song()
    {
        console.log("Love me like you do la la la");
    }
};

function createPersonInfo1(firstName,age)
{
    // const obj={};
    // to remove after some timer error
    const obj=Object.create(methodObj);
    obj.firstName=firstName;
    obj.age=age;
    obj.about=methodObj.about111;
    obj.isMarried=methodObj.isMarried111;
    return obj;
}
const person111=createPersonInfo1("Joni",16);
console.log(person111);
// console.log(person111.firstName);
// const perInfo111=person111.about111();
// const perInfo112=person111.about();
// console.log(perInfo111,"\n",perInfo112);

// after some time
// person111.song(); //removeIt if we set [[Prototype]] or__proto__ it won't give error else error










//removeIt uppr__proto__ use kr rhe the ab prototype krte h
// console.log("prototype is:",createPersonInfo1.prototype);


createPersonInfo1.prototype.bookReader= count => {
        if(count>3) return true;
        else return false;
}
//let's check
let isReader=createPersonInfo1.prototype.bookReader(4);
console.log(isReader);
console.log("end");
//prototype as a proto
// const obj=Object.create(methodObj); //===
// const obj=Object.create(createPersonInfo1.prototype);



//2 task 
// 1st define method in methodObj
// 2nd create method in createPersonInfo1 with help of methodObj
// what is we miss one step     all gone

const obj1={
    key1:"value1",
    key2:"value2"
};
const obj2={key3:"value3"};
console.log(obj2.key3); //simple
console.log(obj1.key1); //simple
console.log(obj1.key3); //undefined but we want JS go to the obj2 and take the value of key3

// let's see how to to do this
const obj11={
    key1:"value1",
    key2:"value2"
};
// const obj12={}; //empty
const obj12=Object.create(obj11);
console.log(obj12); //same empty
obj12.key3="value3";
console.log(obj12); //working as usual nothing special
console.log(obj12.key3);
console.log(obj12.key1); //lmao
console.log(obj12);

// lamo explanation ->JS 1st go to obj12 if it has key1 then fine
// but if not then it go in [[Prototype]] (or __Proto in older) if find then take value from here else undefined
// console.log(obj12.[[Prototype]]); //error
console.log(obj12.__proto__);

//in JS function = function + object
function hello()
{
    console.log("hello world");
}
hello();
console.log(hello.name); //give function name 
// syntax functionnName.name
//add property
hello.myNameIs="Ashok Kumar Teli";
console.log(hello.myNameIs);

console.log("All about prototype");
//function returns free space (or object)
//that is prototype
console.log(hello.prototype);//empty
// only functions have prototype
if(hello.prototype)
console.log("true");
else console.log("false");
const hello1={name:"A"};
if(hello1.prototype)
   console.log("true");
else console.log("false");

//add property in prototype
hello.prototype.firstName="Ashok";
console.log(hello.prototype);
console.log(hello.prototype.firstName);

//new 
const obj111=function(firstName,age)
{
    this.firstName=firstName;
    this.age=age;

}
obj111.prototype.info=function()
{
    return 'you will get info here';
};
const obj222=new obj111("don",90);
console.log(obj222);
const info=obj222.info();
console.log(info);

//new keyword 1. create {} object , this ={}
//2. return this
//3. set proto for obj222 of obj111's prototype

function createPersonInfo123(firstName,age)
{
   
    // const obj=Object.create(methodObj); //no need 
// set method of methodobj as createPersonInfo1.prototype.about etc,
       
    this.firstName=firstName; //obj nhi this
    this.age=age;
   
    return this; //or no need to write becoz it returns itself
}
createPersonInfo123.prototype.about=function(){
    return `use name is ${this.firstName} and age is ${this.age}`;
}
const objjj=new createPersonInfo123("Ashok",28);
console.log(objjj);
const infoo=objjj.about();
console.log(infoo);
//new ka pta kaise lgega toh 
// function name start with uppercase letter
// createPersonInfo123 ko CreatePersonInfo123

for(let key in objjj)
     console.log(key);
// about  bhi key me print ho rhi h 

for(let key in objjj)
  if(objjj.hasOwnProperty(key)) //ab about nhi
     console.log(key); 

//array 
const arr1=[1,2,3,4,5]; //internally
// const arr1=new Array(1,2,3,4,5);

console.log(Object.getPrototypeOf(arr1));//The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.


// console.log(arr1.prototype);
// console.log(objjj.prototype); both undefined
console.log(arr1.__proto__);

console.log(Array.prototype);
//yha prototype is [] array type it depends (we can set object to array)