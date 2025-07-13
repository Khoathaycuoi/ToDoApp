const newTaskInput = document.getElementById("newtask");
const todoList = document.getElementById("todolist");
const completedList = document.getElementById("completedtask");

function CreateTask() {
  const taskText = newTaskInput.value.trim();
  if (!taskText) return alert("Please enter a task");
  todoList.appendChild(createTaskItem(taskText, false));
  newTaskInput.value = "";
}

function createTaskItem(text, isComplete) {
  const li = document.createElement("li");
  li.className = "task-item";

  const p = document.createElement("p");
  p.innerText = text;

  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  btn1.className = btn2.className = "btn";

  if (isComplete) {
    btn1.innerText = "↩️";
    btn1.title = "Làm lại task";
    btn1.onclick = () => moveTask(li, todoList, false);
  } else {
    btn1.innerText = "✅";
    btn1.title = "Đánh dấu hoàn thành";
    btn1.onclick = () => moveTask(li, completedList, true);
  }

  btn2.innerText = "🗑️";
  btn2.title = "Xóa task";
  btn2.onclick = () => li.remove();

  li.append(p, btn1, btn2);
  return li;
}

function moveTask(taskElement, targetList, isComplete) {
  const text = taskElement.querySelector("p").innerText;
  targetList.appendChild(createTaskItem(text, isComplete));
  taskElement.remove();
}

newTaskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") CreateTask();
});
