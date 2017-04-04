import React from 'react';
import {observer} from 'mobx-react';
import ToDoListModel from './ToDoListModel';
import ToDo from './ToDo';

const todos = [{title: 'first', description: 'first item', isCompleted: false}, {title: 'second', description: 'second item', isCompleted: false}]
let todoStore = ToDoListModel.fromJS(todos);

@observer
export default class ToDoListComponent extends React.Component {
  render() {
    return (<div>
      <h2>Pending</h2>
      <section id="pendingTodos">{todoStore.pendingToDos().map((t) => <ToDo key={t.title} object={t} />)}</section>
      <h2>Completed</h2>
      <section id="completedTodos">{todoStore.completedToDos().map((t) => <ToDo key={t.title} object={t} />)}</section>
    </div>)
  }
}
