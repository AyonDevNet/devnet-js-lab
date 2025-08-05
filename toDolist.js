

document.getElementById("add-btn").addEventListener("click", function () {
  const task = document.getElementById("task-input").value.trim(); 
  const todoList = document.getElementById("todo-list");

  if (task === "") {
    alert("Please put your information");
    return;
  }

  const creatLi = document.createElement("li");
  creatLi.textContent = task;

  const deletbtn = document.createElement("button");
  deletbtn.textContent = "❌";

  deletbtn.addEventListener("click", function () {
    todoList.removeChild(creatLi); 
  });

  creatLi.appendChild(deletbtn);
  todoList.appendChild(creatLi); 

  document.getElementById("task-input").value = ""; 
});



