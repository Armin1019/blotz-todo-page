const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

const tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  for (const task of tasks) {
    const item = document.createElement("li");
    item.textContent = task.text;
    taskList.appendChild(item);
  }
}

addButton.addEventListener("click", function () {
  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text });
  taskInput.value = "";
  renderTasks();
});
