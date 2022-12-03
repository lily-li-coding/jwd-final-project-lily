const taskManager = new TaskManager();

// taskManager.addTask(
//   'School Work',
//   'Drive the kids to school',
//   'Drive the kids to school tomorrow',
//   'Mike',
//   '12/15/2022');
  
// taskManager.addTask(
//   'Home Work',
//   'Clean the house',
//   'Clean the kitchen and other rooms',
//   'Mary',
//   '12/15/2022');

const myForm = document.forms["newTaskForm"];
const errorMessage = document.getElementById('alertMessage');

myForm.onsubmit = function(event){
  event.preventDefault();

  const taskType = myForm.taskType.value;
  const name = myForm.name.value;
  const description = myForm.description.value;
  const assignedTo = myForm.assignedTo.value;
  const dueDate = myForm.dueDate.value;

  if (taskType && name && description && assignedTo && dueDate) {
    taskManager.addTask(
      taskType,
      name,
      description,
      assignedTo,
      dueDate);

    myForm.taskType.value = null;
    myForm.name.value = null;
    myForm.description.value = null;
    myForm.assignedTo.value = null;
    myForm.dueDate.value = null;

    errorMessage.style.display = "none";
  } else {
    errorMessage.innerHTML = "Please input all the values before adding the task.";
    errorMessage.style.display = "block";
  }
  
  console.log(taskManager.tasks);
};
