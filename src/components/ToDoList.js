import React from 'react';
import ToDo from './ToDo';

export default class ToDoList extends React.Component {
  render() {
    const todos = [{title: 'first', description: 'first item', isCompleted: false}, {title: 'second', description: 'second item', isCompleted: false}]
    return <div>{todos.filter((t) => !t.isCompleted).map((t) => <ToDo key={t.title} object={t} />)}</div>
  }
}
