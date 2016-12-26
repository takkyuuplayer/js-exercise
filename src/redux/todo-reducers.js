import { combineReducers } from 'redux';

import {
  TOGGLE_TODO,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  VisivilityFilters,
} from './todo-actions';

function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
          ...state,
          {
            text: action.text,
            completed: false,
          }
        ];
    case TOGGLE_TODO:
      return state.map((todo, index) =>
          index === action.index
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo
      );

    default:
      return state;
  }
}

function visibilityFilter (state = VisivilityFilters.SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export const todoApp = combineReducers({
  visibilityFilter,
  todos,
});
