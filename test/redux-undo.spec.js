import assert from 'power-assert';

import { createStore, combineReducers } from 'redux';
import undoable, { ActionCreators } from 'redux-undo';

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
    let store = createStore(reducer);

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

  describe('ActionCreators', () => {
    const reducer = combineReducers({
      counter: undoable(counter),
    });
    let store = createStore(reducer);

    store.dispatch({type:'INCREMENT'});
    store.dispatch({type:'INCREMENT'});
    store.dispatch({type:'INCREMENT'});

    it('can dispatch undo', () => {
      assert.strictEqual(store.getState().counter.present, 3);

      store.dispatch(ActionCreators.undo());

      assert.strictEqual(store.getState().counter.present, 2);

      store.dispatch(ActionCreators.undo());
      store.dispatch(ActionCreators.undo());

      assert.strictEqual(store.getState().counter.present, 0);

      store.dispatch(ActionCreators.undo());

      assert.strictEqual(store.getState().counter.present, 0);
    });

    it('can dispatch redo', () => {
      store.dispatch(ActionCreators.redo());

      assert.strictEqual(store.getState().counter.present, 1);

      store.dispatch(ActionCreators.redo());
      store.dispatch(ActionCreators.redo());

      assert.strictEqual(store.getState().counter.present, 3);

      store.dispatch(ActionCreators.redo());

      assert.strictEqual(store.getState().counter.present, 3);
    });

    it('can jump to past', () => {
      store.dispatch(ActionCreators.jumpToPast(1));

      assert.strictEqual(store.getState().counter.present, 1);

      store.dispatch(ActionCreators.jumpToPast(5));

      assert.strictEqual(store.getState().counter.present, undefined);

      store.dispatch(ActionCreators.jumpToPast(0));

      assert.strictEqual(store.getState().counter.present, 0);
    });
  });
});
