import assert from 'power-assert';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import reducer from '../reducers';
import AddTodo from './AddTodo';

let store = createStore(reducer, {
  visibilityFilter: 'SHOW_COMPLETED',
  todos: [
    {
      text: 'Todo 1',
      id: 0,
      completed: false,
    },
  ]
});

describe('AddTodo component', () => {
  it('can add Todo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );

    wrapper.find('input').node.value = 'Todo 2';

    wrapper.find('form').simulate('submit');

    assert.deepStrictEqual(store.getState().todos, [
      {
        text: 'Todo 1',
        id: 0,
        completed: false,
      },
      {
        text: 'Todo 2',
        id: 1,
        completed: false,
      },
    ]);
  });
});
