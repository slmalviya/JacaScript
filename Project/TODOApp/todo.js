document.addEventListener("DOMContentLoaded", function() {
    let taskInput = document.getElementById("taskInput");
    let addTaskBtn = document.getElementById("addTaskBtn");
    let taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function(){
        let taskText = taskInput.value.trim();

        if (taskText !== "") {
            let listItem = document.createElement("li");
            listItem.innerText = taskText;

            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add("delete");

            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
            taskInput.value = "";
        } else {
            alert("Please enter a valid task!");
        }
    });

    taskList.addEventListener("click", function(event){
        if(event.target.classList.contains("delete")){
            let listItem = event.target.parentElement;
            listItem.remove();
        }
    });
});
