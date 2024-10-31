const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//Evenet Listeners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
//CHECK MARK BUTTON
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>'
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//CHECK TRASH BUTTON
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//APPEND TO LIST
todoList.appendChild(todoDiv);
//clear Todo INPUT VALUE
todoInput.value = "";
}

function deleteCheck(e) {
   const item = e.target;
   //DELETE TODO
   if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    //Animation
    console.log("42",todo);
    todo.classList.add("fall");
    todo.addEventListener("transitionend",function() { todo.remove();
        console.log("45",todo);
   });
}


//CHECK MARK
if(item.classList[0] ==="complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}

function filterTodo(e) {
    const todos = todoList.children;
    Array.from(todos).forEach(function(todo){
        switch(e.target.value){
            
case "all":
    todo.style.display = "flex";
    break;
    case"completed":
    if(todo.classList.contains("completed")){
        todo.style.display = "flex";
    } else {
        todo.style.display = "none";
    } break;
    case "uncompleted":
        if(!todo.classList.contains("completed")) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
        break;
        }
    });
}


function saveLocalTodos(todo){
    //CHECK
    let todos;
    if(localStorage.getItem("todos")==null){
        todos = []
    }
}