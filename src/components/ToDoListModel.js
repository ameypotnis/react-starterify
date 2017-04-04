import React from 'react';
import ToDoModel from './ToDoModel';

export default class ToDoListModel {
  todos = [];
  constructor(todos) {
    todos.map((t) => this.todos.push(ToDoModel.fromJS(t)));
  }

  addToDo(todo) {
    this.todos.push(ToDoModel.fromJS(todo));
  }

  pendingToDos() {
    return this.todos.filter((t) => !t.isCompleted)
  }

  completedToDos() {
    return this.todos.filter((t) => t.isCompleted)
  }

  static fromJS(object) {
    return new ToDoListModel(object);
  }
}
