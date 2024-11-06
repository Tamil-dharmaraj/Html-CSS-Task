// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") return; // Avoid empty tasks
  
    // Create list item for the new task
    const listItem = document.createElement("li");
  
    // Add text to the list item
    listItem.textContent = taskInput.value;
  
    // Add event listener to mark task as completed
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
  
    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });
  
    // Append delete button to the list item
    listItem.appendChild(deleteBtn);
  
    // Add list item to the task list
    taskList.appendChild(listItem);
  
    // Clear input field
    taskInput.value = "";
  }
  