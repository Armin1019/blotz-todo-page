const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const clearDoneButton = document.getElementById("clear-done-button");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  for (const task of tasks) {
    const item = document.createElement("li");
    item.textContent = task.text;
    if (task.done) {
      item.classList.add("done");
    }
    item.addEventListener("click", function () {
      task.done = !task.done;
      renderTasks();
    });
    taskList.appendChild(item);
  }
}

addButton.addEventListener("click", function () {
  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text, done: false });
  taskInput.value = "";
  renderTasks();
});

clearDoneButton.addEventListener("click", function () {
  tasks = tasks.filter(function (task) {
    return !task.done;
  });
  renderTasks();
});
