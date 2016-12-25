let nextTodoId = 0;
const addTodo = text => ({
  type: 'Add_TODO',
  id: nextTodoId++,
  text,
});

export default addTodo;
