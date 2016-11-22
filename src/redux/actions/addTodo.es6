let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: 'Add_TODO',
    id: nextTodoId++,
    text: text,
  }
};

export default addTodo;
