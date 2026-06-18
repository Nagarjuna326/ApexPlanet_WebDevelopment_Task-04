const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="removeTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addBtn.addEventListener("click", () => {
  const value = taskInput.value.trim();
  if (!value) return;

  tasks.push(value);
  saveTasks();
  renderTasks();
  taskInput.value = "";
});

renderTasks();