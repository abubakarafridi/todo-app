const inputText = document.getElementById("text-Input");
const taskList = document.getElementById("task-List");

function addTask() {
  if (inputText.value !== "") {
    const listItem = document.createElement("li");
    const taskContainer  = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskSpan.innerHTML = inputText.value;
    deleteBtn.innerText = "Remove";

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskSpan);
    listItem.appendChild(taskContainer);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    deleteBtn.onclick = function () {
      taskList.removeChild(listItem);
    };
  }
  inputText.value = "";
}
