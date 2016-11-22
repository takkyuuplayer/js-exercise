import { combineReducers } from 'redux-immutablejs';
import todos from './todos.es6';
import visibilityFilter from './visibilityFilter.es6';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;
