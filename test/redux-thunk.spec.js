import assert from 'power-assert';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return dispatch => (
    new Promise(resolve =>
      setTimeout(() => {
        dispatch(increment());
        resolve();
      }, 1000))
  );
}

function incrementIfOdd() {
  return (dispatch, getState) => {
    const counter = getState();
    if (counter % 2 === 0) {
      return;
    }
    dispatch(increment());
  };
}

describe('redux-thunk', () => {
  it('can handle increment', () => {
    store.dispatch(increment());
    assert.strictEqual(store.getState(), 1);
  });

  it('can handle incrementAsync', (done) => {
    store.dispatch(incrementAsync()).then(() => {
      assert.strictEqual(store.getState(), 2);
      done();
    });
  });

  it('can handle incrementIfOdd', () => {
    store.dispatch(increment());

    store.dispatch(incrementIfOdd());
    assert.strictEqual(store.getState(), 4);

    store.dispatch(incrementIfOdd());
    assert.strictEqual(store.getState(), 4);
  });
});
