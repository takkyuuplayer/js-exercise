import assert from 'power-assert';
import { createStore } from 'redux';
import sinon from 'sinon';

const counter = (prevState = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return prevState + 1;
    case 'DECREMENT':
      return prevState - 1;
    default:
      return prevState;
  }
};

describe("reducer", () => {
  it('can INCREMENT/DECREMENT', () => {
    assert.equal(counter(0, { type: "INCREMENT" }), 1);
    assert.equal(counter(1, { type: "INCREMENT" }), 2);
    assert.equal(counter(2, { type: "INCREMENT" }), 3);

    assert.equal(counter(3, { type: "DECREMENT" }), 2);
    assert.equal(counter(2, { type: "DECREMENT" }), 1);
    assert.equal(counter(1, { type: "DECREMENT" }), 0);

    assert.equal(counter(100, { type: "NOT_DEFINED_METHOD" }), 100);

    assert.equal(counter(undefined, { type: "DECREMENT" }), -1);
  });
});

describe('Redux', () => {
  describe('Redux.createStore', () => {
    const store = createStore(counter);
    const render = () => {
      console.info(store.getState());
    };
    sinon.stub(console, 'info');

    store.subscribe(render);

    it('initial rendering', () => {
      render();

      assert.equal(store.getState(), 0);
      assert.equal(console.info.callCount, 1);
    });

    it('dispatch call subscribed reducers', () => {
      store.dispatch({ type: 'INCREMENT' });

      assert.equal(store.getState(), 1);
      assert.equal(console.info.callCount, 2);

      store.dispatch({ type: 'DECREMENT' });

      assert.equal(store.getState(), 0);
      assert.equal(console.info.callCount, 3);
    });
  });
});
