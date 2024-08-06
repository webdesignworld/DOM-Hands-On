document.getElementById("add-todo").addEventListener("click", function() {
      const todoInput = document.getElementById("todo-input");
      const todoList = document.getElementById("todo-list");

if (todoInput.value !== ""){
        const newTask = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function(){
                newTask.classList.toggle("completed", this.checked);
        });

const taskText = document.createElement("span");
taskText.textContent = todoInput.value;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", function() {
        todoList.removeChild(newTask);
});

newTask.appendChild(checkbox);
newTask.appendChild(taskText);
newTask.appendChild(deleteButton);
todoList.appendChild(newTask);


        todoInput.value = "";
}


});



