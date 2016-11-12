import assert from 'power-assert';
import Immutable from 'immutable';
import React from 'react';
import { createStore } from 'redux';
import { todoApp } from '../../src/redux/todos-reducers.es6';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

const Link = ({
  active,
  children,
  onClick
}) => active ?
  <span>{children}</span>
  : (
  <a href="#" onClick={e => {
    e.preventDefault();
    onClick()
  }} >
  {children}
  </a>
);

class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWilUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }>
        {props.children}
      </Link>
    );
  }
};
FilterLink.contextTypes = {
  store: React.PropTypes.object
}
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

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li onClick={ onClick }
    style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo key={todo.get('id')}
      {...todo.toObject()}
      onClick={() => onTodoClick(todo.get('id'))}
      />
    )}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.get('todos'), state.get('visibilityFilter'))
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch(
      {
        type: 'Toggle_TODO',
        id
      })
  }
};

import { connect } from 'react-redux';
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

const AddTodo = (props, { store }) => {
  let input;
  return (<div>
    <input ref={node => { input = node }} />
      <button onClick={() => {
          store.dispatch({
            type: 'Add_TODO',
            id: nextTodoId++,
            text: input.value
          })
          input.value = '';
        }
      }>
      Add Todo
      </button>
  </div>
  );
};
AddTodo.contextTypes = {
  store: React.PropTypes.object
}
const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    Show:
    { ' ' }
    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

let nextTodoId = 0;
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

describe("TodoApp", () => {

  let wrapper;
  const store = createStore(todoApp);
  const render = () => {
    wrapper = mount(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  };
  render();
  store.subscribe(render);

  it('has empty todos at first as property', () => {
    assert.deepEqual(store.getState().get('todos').toJS(), []);
  });

  it('has a test todo item', () => {
    wrapper.find('input').node.value = 'Test TODO';
    wrapper.find('button').simulate('click');

    wrapper.find('input').node.value = 'Test TODO2';
    wrapper.find('button').simulate('click');

    assert.deepEqual(store.getState().get('todos').toJS(), [{
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

    assert.deepEqual(store.getState().get('todos').toJS(), [{
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
