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

}