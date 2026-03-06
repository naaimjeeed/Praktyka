const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const openTaskFormBtn = document.getElementById('open-task-form-btn');
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};
const removeSpecialChars = (input) => {
    return input.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
}

const addOrUpdateTask = () => {
if(!titleInput.value.trim()){
    alert("Please provide a title");
    return;
}
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }else{
    taskData[dataArrIndex] = taskObj;
  }
  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainter();
  reset();
};



const updateTaskContainter = () => {
    tasksContainer.innerHTML = "";
    taskData.forEach(({id, title, date, description}) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
            <p><strong>Title: </strong>${title}</p>
            <p><strong>Date: </strong>${date}</p>
            <p><strong>Description: </strong>${description}</p>
            <button type="button" class="btn" onclick="editTask(this)">Edit</button>
            <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
        </div>`
        
    });    
};


const deleteTask = (butonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === butonEl.parentElement.id);
    butonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (butonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === butonEl.parentElement.id);
    currentTask = taskData[dataArrIndex];
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
    addOrUpdateTaskBtn.innerText = "Update Task";
    taskForm.classList.toggle("hidden");

};



const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    taskForm.classList.toggle("hidden");
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    currentTask= {};
}

if(taskData.length){
    updateTaskContainter();
}


openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () =>{
    const formInputValuesUpdated = titleInput.value != currentTask.title || dateInput.value != currentTask.date || descriptionInput.value != currentTask.description;
    if(titleInput.value != "" || dateInput.value != "" || descriptionInput.value != "" && formInputValuesUpdated){
        confirmCloseDialog.showModal();
    }else{
        reset();
    }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close()); 

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset();
});

taskForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    addOrUpdateTask();
});
