import assert from 'power-assert';

import { todoApp } from '../../src/redux/todo-reducers';

describe('todoApp', () => {
  describe('ADD_TODO', () => {
    it('can add todo', () => {
      assert.deepStrictEqual(todoApp(
        {todos: [], visibilityFilter: 'SHOW_ALL'},
        {
          type: 'ADD_TODO',
          text: 'new item',
        },
      ), {
        visibilityFilter: 'SHOW_ALL',
        todos: [{ text: 'new item', completed: false }],
      });
    });
  });
  describe('TOGGLE_TODO', () => {
    it('can toggle todo', () => {
      const ret = todoApp(
        {
          visibilityFilter: 'SHOW_ALL',
          todos: [
            { text: 'new item', completed: false, },
            { text: 'new item2', completed: true, },
          ],
        },
        {type: 'TOGGLE_TODO', index: 1 },
      );
      assert.deepStrictEqual(ret,
        {
          visibilityFilter: 'SHOW_ALL',
          todos: [
            { text: 'new item', completed: false, },
            { text: 'new item2', completed: false, },
          ],
        },
      );
    });
  });
});
