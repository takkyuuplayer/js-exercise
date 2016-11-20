import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList.es6';

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

const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(state.get('todos'), state.get('visibilityFilter'))
  }
};
const toggleTodo = (id) => {
  return {
    type: 'Toggle_TODO',
    id
  }
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch(toggleTodo(id))
  }
};

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
