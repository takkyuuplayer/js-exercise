import assert from 'power-assert';
import Immutable from 'immutable';
import React from 'react';
import { createStore } from 'redux';
import { todoApp } from '../../src/redux/todos-reducers.es6';
import { mount } from 'enzyme';

const store = createStore(todoApp);

describe("TodoApp", () => {
  let nextTodoId = 0;
  class TodoApp extends React.Component {
    render() {
      return (
        <div>
          <input ref={node => { this.input = node }} />
          <button onClick={() => {
            store.dispatch({
              type: 'Add_TODO',
              text: this.input.value,
              id: nextTodoId++,
            });
            this.input.value = '';
          }}>
            Add Todo
          </button>
          <ul>
            { this.props.todos.map( (todo) =>
              <li key={todo.get('id')}>
                {todo.text}
              </li>
            )}
          </ul>
        </div>
      )
    }
  };

  let wrapper;
  const render = () => {
    wrapper = mount(<TodoApp todos={store.getState().get('todos')} />);
  };
  render();
  store.subscribe(render);

  it('has empty todos at first as property', () => {
    assert.deepEqual(wrapper.props().todos.toJS(), []);
  });

  it('has a test todo item', () => {
    wrapper.find('input').node.value = 'Test TODO';
    wrapper.find('button').simulate('click');

    assert.deepEqual(wrapper.props().todos.toJS(), [{
      completed: false,
      text: 'Test TODO',
      id: 0
    }]);
    assert.equal(wrapper.find('input').node.value, '');
  });
});

