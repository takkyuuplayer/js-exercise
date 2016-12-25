import React from 'react';
import Todo from './Todo.js';

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {todos.map(todo => <Todo
      key={todo.get('id')}
      {...todo.toObject()}
      onClick={() => onTodoClick(todo.get('id'))}
    />,
    )}
  </ul>
);

export default TodoList;
