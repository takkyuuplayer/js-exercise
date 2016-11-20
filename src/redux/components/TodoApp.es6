import React from 'react';
import AddTodo from './AddTodo.es6';
import VisibleTodoList from './VisibleTodoList.es6';
import Footer from './Footer.es6';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
