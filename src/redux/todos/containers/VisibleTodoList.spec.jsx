import assert from 'power-assert';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import reducer from '../reducers';
import VisibleTodoList from './VisibleTodoList';

let store = createStore(reducer, {
  visibilityFilter: 'SHOW_COMPLETED',
  todos: [
    {
      text: 'Todo 1',
      id: 0,
      completed: false,
    },
    {
      text: 'Todo 2',
      id: 1,
      completed: true,
    },
  ]
});

describe('component VisibleTodoList', () => {
  it('Shows only visible TodoList', () => {
    const wrapper = mount(
      <Provider store={store}>
        <VisibleTodoList />
      </Provider>
    );
    const todoList = wrapper.find('TodoList').at(0);

    assert.deepStrictEqual(todoList.props().todos, [
        {
          text: 'Todo 2',
          id: 1,
          completed: true,
        }
      ]
    );
  });
});
