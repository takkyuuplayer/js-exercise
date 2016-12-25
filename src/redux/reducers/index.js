import { combineReducers } from 'redux-immutablejs';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
