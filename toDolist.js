

document.getElementById("add-btn").addEventListener("click", function () {
  const task = document.getElementById("task-input").value.trim(); // ✅ correct property: value
  const todoList = document.getElementById("todo-list");

  if (task === "") {
    alert("Please put your information");
    return;
  }

  const creatLi = document.createElement("li");
  creatLi.textContent = task;

  const deletbtn = document.createElement("button");
  deletbtn.textContent = "❌";

  deletbtn.addEventListener("click", function () { // ✅ fixed typo: "click"
    todoList.removeChild(creatLi); // ✅ remove the actual <li> element
  });

  creatLi.appendChild(deletbtn);
  todoList.appendChild(creatLi); // ✅ correct variable name

  document.getElementById("task-input").value = ""; // ✅ clears input
});



