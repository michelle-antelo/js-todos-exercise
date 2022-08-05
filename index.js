let form = document.getElementById("form");
let list = document.getElementById("list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let newTask = document.createElement("li");
    newTask.innerText = document.getElementById("task").value;

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    list.appendChild(newTask);
    newTask.appendChild(removeButton);

    form.reset();
    });

list.addEventListener("click", function(event) {
    let lowercase = event.target.tagName.toLowerCase();
    if (lowercase === "li") {
        event.target.style.textDecoration = "line-through";
    } else if (lowercase === "button") {
        event.target.parentNode.remove();
    }
    });