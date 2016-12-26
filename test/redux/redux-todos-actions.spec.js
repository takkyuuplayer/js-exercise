import assert from 'power-assert';

import * as actions from '../../src/redux/todo-actions';

describe('Todo actions', () => {
  it('return TOGGLE_TODO action', () => {
    assert.deepStrictEqual(actions.toggleTodo(1), {
      type: 'TOGGLE_TODO',
      index: 1,
    });
  });

  it('return ADD_TODO action', () => {
    assert.deepStrictEqual(actions.addTodo('new todo'), {
      type: 'ADD_TODO',
      text: 'new todo',
    });
  });
});

describe('Filter actions', () => {
  it('return SET_VISIBILITY_FILTER action', () => {
    assert.deepStrictEqual(actions.setVisivilityFilter('SHOW_ALL'), {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ALL',
    });
  });

  it('throw error for invalid filter', () => {
    assert.throws(() => actions.setVisivilityFilter('INVALID'));
  });
});
