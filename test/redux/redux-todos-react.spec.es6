import assert from 'power-assert';
import Immutable from 'immutable';
import React from 'react';
import { createStore } from 'redux';
import { todoApp } from '../../src/redux/todos-reducers.es6';
import { mount } from 'enzyme';

const store = createStore(todoApp);

const FilterLink = ({
  filter,
  currentFilter,
  children
}) => filter === currentFilter ?
  <span>{children}</span>
  : (
  <a href="#" onClick={e => {
    e.preventDefault();
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  }} >
  {children}
  </a>
);
const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.get('completed')
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.get('completed')
      );
  }
};

let nextTodoId = 0;
class TodoApp extends React.Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
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
          { visibleTodos.map( (todo) =>
            <li key={todo.get('id')}
              onClick={() => { store.dispatch({
                type: 'Toggle_TODO',
                id: todo.get('id')
              }) }}
              style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
              >
              {todo.get('text')}
            </li>
          )}
        </ul>
        <p>
          Show:
          { ' ' }
          <FilterLink currentFilter={visibilityFilter} filter="SHOW_ALL">ALL</FilterLink>
          <FilterLink currentFilter={visibilityFilter} filter="SHOW_ACTIVE">Active</FilterLink>
          <FilterLink currentFilter={visibilityFilter} filter="SHOW_COMPLETED">Completed</FilterLink>
        </p>
      </div>
    )
  }
};

describe("TodoApp", () => {

  let wrapper;
  const render = () => {
    wrapper = mount(<TodoApp {...store.getState().toObject()} />);
  };
  render();
  store.subscribe(render);

  it('has empty todos at first as property', () => {
    assert.deepEqual(wrapper.props().todos.toJS(), []);
  });

  it('has a test todo item', () => {
    wrapper.find('input').node.value = 'Test TODO';
    wrapper.find('button').simulate('click');

    wrapper.find('input').node.value = 'Test TODO2';
    wrapper.find('button').simulate('click');

    assert.deepEqual(wrapper.props().todos.toJS(), [{
      completed: false,
      text: 'Test TODO',
      id: 0
    }, {
      completed: false,
      text: 'Test TODO2',
      id: 1
    }]);

    assert.equal(wrapper.find('input').node.value, '');
  });

  it('can toggle status of item', () => {
    wrapper.find('li').first().simulate('click');

    assert.deepEqual(wrapper.props().todos.toJS(), [{
      completed: true,
      text: 'Test TODO',
      id: 0
    }, {
      completed: false,
      text: 'Test TODO2',
      id: 1
    }]);
  });

  describe('FilterLink', () => {
    it('can show all todos', () => {
      assert.equal(wrapper.find('li').length, 2);
    });

    it('can show completed todos', () => {
      wrapper.find('FilterLink').at(1).simulate('click');
      assert.equal(wrapper.find('li').length, 1);
      assert.equal(wrapper.find('li').text(), 'Test TODO2');
    });

    it('can show active todos', () => {
      wrapper.find('FilterLink').at(2).simulate('click');
      assert.equal(wrapper.find('li').length, 1);
      assert.equal(wrapper.find('li').text(), 'Test TODO');
    });
  });
});
