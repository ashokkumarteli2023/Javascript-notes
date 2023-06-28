// console.log("Let's start project");

const todoForm=document.querySelector(".form-todo");
// console.log(todoForm);
const todoInput=document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
// console.dir(todoInput);
const todoList=document.querySelector(".todo-list");
// console.log(todoList);

todoForm.addEventListener("submit",(e)=>{
    // console.log("you submitted "); //default refresh 
    e.preventDefault(); //now refresh problem solved
    // console.log("you submitted "); 
    // console.log(todoInput.value);
    const newTodoText=todoInput.value;
    const newLi=document.createElement("li");
    
    // const newinnerHTML='<li class=\'yes\'></li>'; //single li tag 
    // const newinnerHTML='<li class="yes"></li>';
    //work
    // const newinnerHTML='<li class="yes">yes</li> <li class="NO">no</li> <li class="NO">no</li>  <li class="NO">no</li>';
    // newLi.innerHTML=newinnerHTML;
    // console.log(newLi);

    //way-1 
    //blunder -> copy paste all should be in a single line 
    // newLi.innerHTML='<span class="text"></span> <div class="todo-buttons"> <button class="todo-btn done">Done</button> <button class="todo-btn remove">Remove</button></div> ';
    
    // way-1 se span ka content change nhi kr pa rhe
    const newInnerHTML=`<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML=newInnerHTML;
    // console.log(newLi);
    todoList.append(newLi);
   
    todoInput.value="";

    
})

todoList.addEventListener("click",(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("done"))
    {
        // console.log("yea! It contains done class");
        const spanElement=e.target.parentNode.previousElementSibling;
        // console.log(spanElement);
        // spanElement.style.color="green";
        // console.dir(spanElement.style);
        spanElement.style.textDecoration="line-through";
    }
    if(e.target.classList.contains("remove"))
    {
        // console.log("yea! It contains remove class");
        const liElement=e.target.parentNode.parentNode;
        liElement.remove()    ;
    }
})