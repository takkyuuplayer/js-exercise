import assert from 'power-assert';
import freeze from 'deep-freeze';

import * as types from '../constants/ActionTypes';
import todos from './todos';


describe('todos reducers', () => {
  it('should return initial state', () => {
    assert.deepStrictEqual(todos(undefined, {}), [{
      text: 'Use Redux',
      id: 0,
      completed: false,
    }]);
  });
  it('should handle ADD_TODO', () => {
    const oldState = [];
    freeze(oldState);
    const state1 = todos(oldState, { type: types.ADD_TODO, text: 'FooBar' });

    assert.deepStrictEqual(state1, [{
      id: 0,
      text: 'FooBar',
      completed: false,
    }]);

    freeze(state1);
    const state2 = todos(state1, { type: types.ADD_TODO, text: 'FooBar2' });

    assert.deepStrictEqual(state2, [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: false,
      },
    ]);
  });
  it('should handle DELETE_TODO', () => {
    const oldState = [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: false,
      },
    ];
    freeze(oldState);

    assert.deepStrictEqual(todos(oldState, { type: types.DELETE_TODO, id: 1 }), [
      {
        id: 0,
        text: 'FooBar',
        completed: false,
      },
    ]);
  });
  it('should handle EDIT_TODO', () => {
    const oldState = [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: false,
      },
    ];
    freeze(oldState);

    assert.deepStrictEqual(todos(oldState, { type: types.EDIT_TODO, id: 0, text: 'EDITED' }), [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'EDITED',
        completed: false,
      },
    ]);
  });
  it('should handle COMPLETE_TODO', () => {
    const oldState = [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: false,
      },
    ];
    freeze(oldState);

    assert.deepStrictEqual(todos(oldState, {
      type: types.COMPLETE_TODO,
      id: 0,
    }), [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: true,
      },
    ]);
  });

  it('should handle COMPLETE_TODO', () => {
    const oldState = [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: true,
      },
    ];
    freeze(oldState);
    const state1 = todos(oldState, { type: types.COMPLETE_ALL });

    assert.deepStrictEqual(state1, [
      {
        id: 1,
        text: 'FooBar2',
        completed: true,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: true,
      },
    ]);

    freeze(state1);

    assert.deepStrictEqual(todos(state1, { type: types.COMPLETE_ALL }), [
      {
        id: 1,
        text: 'FooBar2',
        completed: false,
      },
      {
        id: 0,
        text: 'FooBar',
        completed: false,
      },
    ]);
  });
});
