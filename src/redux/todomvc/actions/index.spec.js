import assert from 'power-assert';

import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    assert.deepStrictEqual(actions.addTodo('Use Redux'), {
      type: types.ADD_TODO,
      text: 'Use Redux',
    });
  });

  it('deleteTodo should create DELETE_TODO action', () => {
    assert.deepStrictEqual(actions.deleteTodo(1), {
      type: types.DELETE_TODO,
      id: 1,
    });
  });

  it('editTodo should create EDIT_TODO action', () => {
    assert.deepStrictEqual(actions.editTodo(1, 'FooBar'), {
      type: types.EDIT_TODO,
      id: 1,
      text: 'FooBar',
    });
  });
  it('completeTodo should create COMPLETE_TODO action', () => {
    assert.deepStrictEqual(actions.completeTodo(1), {
      type: types.COMPLETE_TODO,
      id: 1,
    });
  });

  it('completeAll should create COMPLETE_ALL action', () => {
    assert.deepStrictEqual(actions.completeAll(), {
      type: types.COMPLETE_ALL,
    });
  });

  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    assert.deepStrictEqual(actions.clearCompleted(), {
      type: types.CLEAR_COMPLETED,
    });
  });
});
