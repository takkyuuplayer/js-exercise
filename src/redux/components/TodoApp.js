import React from 'react';
import AddTodo from './AddTodo.js';
import VisibleTodoList from './VisibleTodoList.js';
import Footer from './Footer.js';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
