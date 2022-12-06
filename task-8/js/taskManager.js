const createTaskHtml = (taskId, taskType, name, description, assignedTo, dueDate, status) => {
  const html = `
    <li class="list-group-item" data-task-id="${taskId}">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <span class="badge badge-info">${taskType}</span>
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned to: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <button type="button" class="done-button btn btn-success">Mark as done</button>
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
        task.id,
        task.taskType, 
        task.name, 
        task.description, 
        task.assignedTo, 
        formattedDate, 
        task.status);
      tasksHtmlList.push(taskHtml);
    });

    const tasksHtml = tasksHtmlList.join('\n');
    document.getElementById('tasklist').innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    return this._tasks.find(task => task.id == taskId);
  }

  save() {
    const tasksJson = JSON.stringify(this._tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = this._currentId.toString();
    localStorage.setItem('currentId', currentId);
  }

  load () {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      this._tasks = JSON.parse(tasksJson);
    }

    const currentId = localStorage.getItem('currentId');
    if (currentId) {
      this._currentId = parseInt(currentId);
    }
  }
}