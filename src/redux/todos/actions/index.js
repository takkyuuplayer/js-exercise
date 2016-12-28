let nextId = 0;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextId++,
    text,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}
