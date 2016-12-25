let nextTodoId = 0;
export const addTodo = text => ({
  type: 'Add_TODO',
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'Toggle_TODO',
  id,
});
