import assert from 'power-assert';

import { createStore, combineReducers } from 'redux';
import undoable from 'redux-undo';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

describe('redux-undo', () => {
  describe('undoable', () => {
    const reducer = combineReducers({
      counter: undoable(counter),
    });
    const store = createStore(reducer);

    it('will change state to manage history', () => {
      assert.deepStrictEqual(store.getState(), {
        counter: {
          past: [],
          present: 0,
          future: [],
          history: {
            past: [],
            present: 0,
            future: [],
          },
        },
      });
    });
    it('add past history when state has changed', () => {
      store.dispatch({ type: 'INCREMENT' });

      assert.deepStrictEqual(store.getState(), {
        counter: {
          past: [0],
          present: 1,
          future: [],
          history: {
            future: [],
            history: {
              future: [],
              past: [],
              present: 0,
            },
            past: [
              0,
            ],
            present: 1,
          },
        },
      });
    });
  });
});
