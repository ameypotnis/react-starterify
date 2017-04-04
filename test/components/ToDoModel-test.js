import test from 'ava';
import {expect} from 'chai';
import ToDoModel from '../../src/components/ToDoModel';

test('title', t => {
  const model = ToDoModel.fromJS({title: 'hello', description: 'world', isCompleted: false});
  model.toggleTodo();
  expect(model.isCompleted).to.be.true;
});
