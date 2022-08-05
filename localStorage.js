let form = document.getElementById("form");
let list = document.getElementById("list");

let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTask = document.createElement("li");
  newTask.innerText = savedTodos[i].task;
  newTask.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTask.isCompleted) {
    newTask.style.textDecoration = "line-through";
  }
  list.appendChild(newTask);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTask = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  newTask.innerText = taskValue;
  newTask.isCompleted = false;
  form.reset();
  form.appendChild(newTask);
  savedTodos.push({ task: newTask.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

list.addEventListener("click", function(event) {
    let clickedListItem = event.target;
  
    if (!clickedListItem.isCompleted) {
      clickedListItem.style.textDecoration = "line-through";
      clickedListItem.isCompleted = true;
    } else {
      clickedListItem.style.textDecoration = "none";
      clickedListItem.isCompleted = false;
    }
  
    for (let i = 0; i < savedTodos.length; i++) {
      if (savedTodos[i].task === clickedListItem.innerText) {
        savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
        localStorage.setItem("todos", JSON.stringify(savedTodos));
      }
    }
  });