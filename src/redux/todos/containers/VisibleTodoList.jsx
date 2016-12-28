import { connect } from 'react-redux'
import { toggleTodo } from '../actions';

import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error('Unkown error')
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});
const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
});

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodos;
