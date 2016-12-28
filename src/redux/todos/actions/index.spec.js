import assert from 'power-assert';

import * as actions from './index';

describe('todo actions', () => {
  describe('addTodo', () => {
    it('should create ADD_TODO action', () => {
      assert.deepStrictEqual(actions.addTodo('Use Redux'), {
        type: 'ADD_TODO',
        id: 0,
        text: 'Use Redux',
      });
    });
  });
  describe('setVisibilityFilter', () => {
    it('should create SET_VISIBILITY_FILTER action', () => {
      assert.deepStrictEqual(actions.setVisibilityFilter('active'), {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'active',
      });
    });
  });
  describe('toggleTodo', () => {
    it('should create TOGGLE_TODO action', () => {
      assert.deepStrictEqual(actions.toggleTodo(1), {
        type: 'TOGGLE_TODO',
        id: 1,
      });
    });
  });
});
