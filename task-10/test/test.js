import assert from 'assert';
import { TaskManager } from '../js/taskManager.js';

describe('TaskManager', function () {
  describe('addTest', function () {
    it('should add a new task', function () {
      const taskManager = new TaskManager();
      taskManager.addTask("Home Work", "Cook", "Cook dinner", "Mary", "12/13/2022");
      assert.equal(taskManager.tasks.length, 1);
    });
    it('should delete an existing task', function () {
      const taskManager = new TaskManager();
      taskManager.addTask("Home Work", "Cook", "Cook dinner", "Mary", "12/13/2022");
      taskManager.deleteTask(1);
      assert.equal(taskManager.tasks.length, 0);
    });
    it('should return a task by its id', function () {
      const taskManager = new TaskManager();
      taskManager.addTask("Home Work", "Cook", "Cook dinner", "Mary", "12/13/2022");
      const task = taskManager.getTaskById(1);
      assert.equal(task.taskType, "Home Work");
      assert.equal(task.name, "Cook");
      assert.equal(task.description, "Cook dinner");
      assert.equal(task.assignedTo, "Mary");
      assert.equal(task.dueDate, "12/13/2022");
    });
  });
});