/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor() {
    this.todos = [];
  }

  add(task) {
    if (typeof task !== 'string' || task.trim() === '') {
      throw new Error('Task must be a non-empty string');
    }
    this.todos.push(task);
  }

  getAll() {
    return this.todos;
  }

  remove(index) {
    if (this._isValidIndex(index)) {
      this.todos.splice(index, 1);
    }
    // else: ignore silently (as your test expects)
  }

  update(index, newTask) {
    if (this._isValidIndex(index)) {
      if (typeof newTask !== 'string' || newTask.trim() === '') {
        throw new Error('Task must be a non-empty string');
      }
      this.todos[index] = newTask;
    }
    // else: ignore silently
  }

  get(index) {
    if (this._isValidIndex(index)) {
      return this.todos[index];
    }
    return null; // as per your test expectation
  }

  clear() {
    this.todos = [];
  }

  _isValidIndex(index) {
    return typeof index === 'number' && index >= 0 && index < this.todos.length;
  }
}

module.exports = Todo;
