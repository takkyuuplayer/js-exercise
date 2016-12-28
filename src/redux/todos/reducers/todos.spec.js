import assert from 'power-assert';

import todos from './todos';

describe('todo reducer', () => {
  it('should return initial state', () => {
    assert.deepStrictEqual(todos(undefined, {}), []);
  });
  it('should handle ADD_TODO', () => {
    assert.deepStrictEqual(todos([], { type: 'ADD_TODO', text: 'Todo 1', id: 0 }), [
      {
        text: 'Todo 1',
        id: 0,
        completed: false,
      },
    ]);
    assert.deepStrictEqual(todos([
      {
        text: 'Todo 1',
        id: 0,
        completed: false,
      },
    ], { type: 'ADD_TODO', text: 'Todo 2', id: 1 }), [
      {
        text: 'Todo 1',
        id: 0,
        completed: false,
      },
      {
        text: 'Todo 2',
        id: 1,
        completed: false,
      },
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    assert.deepStrictEqual(todos([
      {
        text: 'Todo 1',
        id: 0,
        completed: false,
      },
      {
        text: 'Todo 2',
        id: 1,
        completed: false,
      },
    ], {
      type: 'TOGGLE_TODO',
      id: 1,
    }), [
      {
        text: 'Todo 1',
        id: 0,
        completed: false,
      },
      {
        text: 'Todo 2',
        id: 1,
        completed: true,
      },
    ]);
  });
});
