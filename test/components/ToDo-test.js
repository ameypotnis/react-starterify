import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import ToDo from '../../src/components/ToDo';

const object = {title: 'Hello', description: 'world', isCompleted: false}
const wrapper = shallow(<ToDo object={object}/>);

test('title', t => {
  expect(wrapper.find("#title").text()).to.equal('Hello');
  expect(wrapper.find("#description").text()).to.equal('world');
});
