import * as ActionTypes from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    text,
  };
}

export function deleteTodo(id) {
  return {
    type: ActionTypes.DELETE_TODO,
    id,
  };
}

export function editTodo(id, text) {
  return {
    type: ActionTypes.EDIT_TODO,
    id,
    text,
  };
}

export function completeTodo(id) {
  return {
    type: ActionTypes.COMPLETE_TODO,
    id,
  };
}

export function completeAll() {
  return {
    type: ActionTypes.COMPLETE_ALL,
  };
}

export function clearCompleted() {
  return {
    type: ActionTypes.CLEAR_COMPLETED,
  };
}
