import React from 'react'
import assert from 'power-assert';
import { shallow } from 'enzyme';

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import App from './App';

describe('component App', () => {
  it('includes AddTodo, VisibleTodoList, Footer', () => {
    const wrapper = shallow(
      <App />
    );

    assert.strictEqual(wrapper.find(AddTodo).length, 1);
    assert.strictEqual(wrapper.find(VisibleTodoList).length, 1);
    assert.strictEqual(wrapper.find(Footer).length, 1);
  });
});
