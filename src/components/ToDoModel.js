import {observable} from 'mobx';

export default class ToDoModel {
	title;
	description;
  @observable isCompleted;

  constructor(todo) {
    this.title = todo.title;
    this.description = todo.description;
    this.isCompleted = todo.isCompleted;
  }

  toggleTodo() {
    this.isCompleted = !this.isCompleted;
  }

  static fromJS(object) {
    return new ToDoModel(object);
  }
}
