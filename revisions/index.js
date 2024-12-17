document.addEventListener("DOMContentLoaded", () => {
  const addInput = document.getElementById("todo-input");
  const submitButton = document.getElementById("todo-submit");
  const todoList = document.getElementById("todo-list");

  submitButton.addEventListener("click", () => {
    const addTask = addInput.value;
    const dateForTask = new Date().toLocaleDateString();

    if (!addTask) {
      alert("Veuillez entrer une tâche avant d'ajouter.");
      return;
    }

    const listTask = document.createElement("p");
    listTask.textContent = `${addTask} --- ${dateForTask}`;

    const deleteButton = document.createElement("buttonDelete");
    deleteButton.textContent = "Supprimer";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.color = "red";

    deleteButton.addEventListener("click", () => {
      todoList.removeChild(listTask);
    });
    const validateButton = document.createElement("buttonValidate");
    validateButton.textContent = "Valider";
    validateButton.style.marginLeft = "10px";
    validateButton.style.cursor = "pointer";
    validateButton.style.color = "green";

    validateButton.addEventListener("click", () => {
      listTask.style.textDecoration = "line-through";
      listTask.style.color = "gray";
      validateButton.disabled = true;
    });

    listTask.appendChild(validateButton);
    listTask.appendChild(deleteButton);

    todoList.appendChild(listTask);

    addInput.value = "";
  });
});
