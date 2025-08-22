document.getElementById("add-btn").addEventListener("click", function(){

 const task =document.getElementById("task-input").value.trim();
 const todolist = document.getElementById("todo-list");
 

 if (task === "") {
  alert ("Please input your command")
  return;
 }

 const creatLi = document.createElement("li");
 creatLi.textContent = task;

  const deltebtn = document.createElement("button");
  deltebtn.textContent = "❌";

  deltebtn.addEventListener("click", function(){
     
    todolist.removeChild(creatLi)

  });

 
  creatLi.appendChild(deltebtn);
  todolist.appendChild(creatLi);

  
document.getElementById("task-input").value = ""

});