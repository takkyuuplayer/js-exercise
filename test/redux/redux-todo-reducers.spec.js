import assert from 'power-assert';

import * as actions from '../../src/redux/todo-actions';
import { todoApp } from '../../src/redux/todo-reducers';

describe('todoApp', () => {
  describe('ADD_TODO', () => {
    it('can add todo', () => {
      assert.deepStrictEqual(todoApp(
        {todos: [], visibilityFilter: 'SHOW_ALL'},
        actions.addTodo('new item'),
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
        actions.toggleTodo(1),
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

describe('todoApp', () => {
  describe('SET_VISIBILITY_FILTER', () => {
    it('can set visibility filter', () => {
      const ret = todoApp(
        {
          visibilityFilter: 'SHOW_ALL',
        },
        actions.setVisivilityFilter('SHOW_COMPLETED'),
      );
      assert.deepStrictEqual(ret, {visibilityFilter: 'SHOW_COMPLETED', todos:[ ] });
    });
  });
});
