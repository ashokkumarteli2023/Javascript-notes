//innerHTML

const divClassHeadline=document.querySelector(".headline");
// console.log(divClassHeadline);

// console.log(divClassHeadline.innerHTML); 
// console.log(typeof divClassHeadline.innerHTML);      ///string

// //changes
// divClassHeadline.innerHTML="<h1>This is New innerHtml</h1>";
// divClassHeadline.innerHTML+="<h1>This is New innerHtml</h1>";
// divClassHeadline.innerHTML+="<h1 class=\"heading\">This is head-2</h1>"; 
// console.log(divClassHeadline);


//classList
// const sectionTodo=document.querySelector(".section-todo");
// console.log(sectionTodo);
// console.log(sectionTodo.classList);          //DOMTokenList(2)

// console.log(sectionTodo.classList.length);  //2
    //A DOMTokenList is indexed beginning with 0

// sectionTodo.classList.add("bg-dark");    //add
// sectionTodo.classList.remove("container"); 
// sectionTodo.classList.toggle("bg-dark"); 
// console.log(sectionTodo.classList);      //remove becoz it was present
// sectionTodo.classList.toggle("bg-dark"); 
// console.log(sectionTodo.classList);      //add becoz it wasn't present
// const isContainsBgdark=sectionTodo.classList.contains("bg-dark");
// console.log(isContainsBgdark); //true;

const todoList=document.querySelector(".todo-list");
//we do like this
// todoList.innerHTML="<li>Newer 1</li>";
// todoList.innerHTML="<li>Newer 1 </li> <li>Newer 2 </li>"; 
// console.log(todoList);

// but we don't 
// todoList.innerHTML+="<li>New 1</li>"; //performance issues
// todoList.innerHTML+="<li>New 2</li>";
// console.log(todoList);

// then how we'll
const newTodoItems=document.createElement("li");
// console.log(newTodoItems);

const newTodoItemText=document.createTextNode("New 1 hhhh");
// console.log(newTodoItemText);

newTodoItems.append(newTodoItemText); //appendChild ->older 
// console.log(newTodoItems);

// todoList.append(newTodoItem);
// console.log(todoList);


//shortcut
// const newTodoItem1=document.createElement("li");
// newTodoItem1.textContent="New 2";
// todoList.append(newTodoItem1); //at the end
// todoList.prepend(newTodoItem1);  //in starting 
    //final prepend hogha becoz it's address 
    //if we want both then clone nodes
// console.log(todoList);

const todo1=document.querySelector(".todo-list li");
// console.log("todo1",todo1);
    // The Element.remove() method removes the element from the tree it belongs to
// todo1.remove();
// console.log(todo1); //giving li doubt solved
// const todo2=document.querySelector(".todo-list li");
// console.log(todo2); //null
// console.log(todoList);


const newTodoItem=document.createElement("li");
newTodoItem.textContent="whoa!";
// todoList.before(newTodoItem); //before li means outside and before
// todoList.after(newTodoItem); //after and outside of li
// console.log(todoList);


//optional
//element.insertAdjacentHTML(where,html)
// const htm=document.html;
// console.dir(document);       //html -> undefined
// console.log(htm); //doubt solved undefined becoz it doesn't exit in document

//start from here 15Jun 2022
// const todoList=document.querySelector(".todo-list");
// console.log(todoList);
// todoList.insertAdjacentHTML("beforeend","<li>New li 1</li>");
// console.log(todoList);
//  beforeend       ---->   append
//  afterbegin              prepend
//  beforebegin             before
//  afterend                after


//clone nodes
// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// li.textContent="new todo";

// ul.append(li);
// ul.prepend(li);      //only prepend

// const li2=li.cloneNode();
// console.log(li2); //empty
// const li2=li.cloneNode(true); //complete copy 
// console.log(li2); 
// ul.append(li);
// ul.prepend(li2);
// console.log(ul);

//some old methods to support poor IE
// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// li.textContent="new todo";
// ul.appendChild(li); //m-1
// console.log(ul);

// const refNode=document.querySelector(".todo-list li");
// console.log(refNode);
// ul.insertBefore(li,refNode); //syntax-> (element,insertPosition)
// console.log(ul);

// ul.replaceChild(li,refNode); //syntax-> (element,replacedPosition)
// console.log(ul);

// ul.removeChild(refNode);
// console.log(ul);

//static v/s live list
// const liList=document.querySelectorAll(".todo-list li"); //static list
// console.log(liList); //count 6
const ul=document.querySelector(".todo-list");
// console.log(ul);

// console.dir(ul);
// ul.onclick=()=>{
//     console.log("O/p after click");
// }

// const li7th=document.createElement("li");
// li7th.textContent="list 1111111";
// ul.appendChild(li7th);
// console.log(ul); //added
// console.log(liList); //count 6 

// const ul=document.querySelector(".todo-list");
// const liList=ul.getElementsByTagName("li");
// console.log(liList); //count 6 {HTMLCollection(6)}
// const li7th=document.createElement("li");
// li7th.textContent="list 1111111";
// ul.appendChild(li7th);
// console.log(ul); //added
// console.log(liList); //count 7 {HTMLCollection(7)}

//height, width etc.
const sectionTodo1=document.querySelector(".section-todo");
console.log(sectionTodo1);
console.log(sectionTodo1.getBoundingClientRect().height);
const info=sectionTodo1.getBoundingClientRect();
console.log(info);
console.log(info.height);
console.log(info.width);

