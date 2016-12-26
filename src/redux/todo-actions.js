export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisivilityFilters = {
  SHOW_ALL:       'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE:    'SHOW_ACTIVE',
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text,
  }
};

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index: index,
  }
};

export function setVisivilityFilter(filter) {
  if(VisivilityFilters[filter]) {
    return {
      type: SET_VISIBILITY_FILTER,
      filter,
    }
  }
  throw new Errow('Invalid filter: ' + filter);
}
