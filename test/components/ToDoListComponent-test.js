import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import ToDoListComponent from '../../src/components/ToDoListComponent';

const wrapper = shallow(<ToDoListComponent />);

test('should have inprogress todos', t => {
  expect(wrapper.find("#pendingTodos").children()).to.have.length(2);
  expect(wrapper.find("#completedTodos").children()).to.have.length(0);
});
