import React, { PropTypes } from 'react';

import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {
    todos.map( todo =>
      <Todo
        text={todo.text}
        completed={todo.completed}
        key={todo.id}
        onClick={() => onTodoClick(todo.id) }
      />
    )
    }
  </ul>
);

export default TodoList;
