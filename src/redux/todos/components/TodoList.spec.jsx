import React from 'react';
import assert from 'power-assert';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

describe('TodoList component', () => {
  it('return list of todo', () => {
    const onClick = sinon.spy();
    const todos = [
      {
        id: 1,
        text: 'Todo 1',
        completed: false,
      },
      {
        id: 2,
        text: 'Todo 2',
        completed: true,
      },
    ];
    const wrapper = shallow(
      <TodoList todos={todos} onTodoClick={onClick} />
    );

    assert.strictEqual(wrapper.find('Todo').length, 2);

    wrapper.find('Todo').at(1).simulate('click');

    assert.strictEqual(onClick.callCount, 1);
    assert.strictEqual(onClick.calledWith(2), true);
  });
});
