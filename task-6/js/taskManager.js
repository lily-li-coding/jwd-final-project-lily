const createTaskHtml = (taskType, name, description, assignedTo, dueDate, status) => {
  const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <span class="badge badge-info">${taskType}</span>
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>${assignedTo}</small>
            <small>${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>`;
  return html;
};

class TaskManager {
  constructor(currentId = 0) {
    this._tasks = [];
    this._currentId = currentId;
  }

  get tasks() {
    return this._tasks;
  }

  get currentId() {
    return this._currentId;
  }

  addTask(taskType, name, description, assignedTo, dueDate, status = 'TODO') {
    this._currentId++;
    this._tasks.push({
      id: this.currentId,
      taskType,
      name,
      description,
      assignedTo,
      dueDate,
      status
    });
  }

  render() {
    let tasksHtmlList = [];
    
    this._tasks.forEach(task => {
      const date = new Date(task.dueDate);
      const formattedDate = date.toLocaleDateString();
      const taskHtml = createTaskHtml(
        task.taskType, 
        task.name, 
        task.description, 
        task.assignedTo, 
        formattedDate, 
        task.status);
      tasksHtmlList.push(taskHtml);
    });

    const tasksHtml = tasksHtmlList.join('\n');
    document.getElementById("tasklist").innerHTML = tasksHtml;
  }

  
}