let todoInput = document.getElementById("todoInput");
let addTodoButton = document.getElementById("addTodoButton");
let todosDiv = document.getElementById("todos");

addTodoButton.addEventListener("click", function () {
    if (todoInput.value) {
        let todoItemDiv = document.createElement("div");
        todoItemDiv.id = "todo-item"

        let todoTitle = document.createElement("h1");
        todoTitle.innerHTML = todoInput.value;
        todoTitle.id = "todoTitle";

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "checkBox";
        checkBox.addEventListener("click", function() {
            if (checkBox.checked) {
                todoTitle.style.textDecorationLine = "line-through";
                todoTitle.style.textDecorationColor = "#3498DB";
            } else {
                todoTitle.style.textDecorationLine = "none"; 
                todoTitle.style.textDecorationColor = "none";
            }
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.id = "deleteButton";
        
        deleteButton.addEventListener("click", function () {
            return todoItemDiv.remove();
        });

        todoItemDiv.appendChild(checkBox);
        todoItemDiv.appendChild(todoTitle);
        todoItemDiv.appendChild(deleteButton);
        todosDiv.appendChild(todoItemDiv);
        todoInput.value = "";
    }
})