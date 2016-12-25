import assert from 'power-assert';
import { createStore } from 'redux';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

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
  beforeEach((done) => {
    sinon.stub(console, 'info');
    done();
  });
  afterEach((done) => {
    console.info.restore();
    done();
  });

  describe('Redux.createStore', () => {
    const store = createStore(counter);
    const render = () => {
      console.info(store.getState());
    };

    store.subscribe(render);

    it('initial rendering', () => {
      render();

      assert.equal(store.getState(), 0);
      assert.equal(console.info.callCount, 1);
    });

    it('dispatch call subscribed reducers', () => {
      store.dispatch({ type: 'INCREMENT' });

      assert.equal(store.getState(), 1);
      assert.equal(console.info.callCount, 1);

      store.dispatch({ type: 'DECREMENT' });

      assert.equal(store.getState(), 0);
      assert.equal(console.info.callCount, 2);
    });
  });

  describe('createStore from scratch', () => {
    const createStore2 = (reducer) => {
      let state;
      let listeners = [];

      const getState = () => state;
      const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
      };
      const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
          // Instead of implement unsubscribe method, return funtion to remove listener.
          listeners = listeners.filter(l => l !== listener);
        };
      };
      dispatch({});
      return { getState, dispatch, subscribe };
    };
    const store = createStore2(counter);
    const render = () => {
      console.info(store.getState());
    };

    store.subscribe(render);

    it('initial rendering', () => {
      render();

      assert.equal(store.getState(), 0);
      assert.equal(console.info.callCount, 1);
    });

    it('dispatch call subscribed reducers', () => {
      store.dispatch({ type: 'INCREMENT' });

      assert.equal(store.getState(), 1);
      assert.equal(console.info.callCount, 1);

      store.dispatch({ type: 'DECREMENT' });

      assert.equal(store.getState(), 0);
      assert.equal(console.info.callCount, 2);
    });
  });
});

describe('Count w/ React', () => {
  const Counter = ( {
    value,
    onIncrement,
    onDecrement
  }) => (
    <div>
      <h1>{value}</h1>
      <button id="increment" onClick={onIncrement}>+</button>
      <button id="decrement" onClick={onDecrement}>-</button>
    </div>
  );
  it('can increment/decrement', () => {
    const onButtonClick = sinon.spy();
    const store = createStore(counter);
    let wrapper;
    const render = () => {
      wrapper = mount(<Counter
        value={store.getState()}
        onIncrement={ () => store.dispatch({type: 'INCREMENT' }) }
        onDecrement={ () => store.dispatch({type: 'DECREMENT' }) }
      />);
    };
    render();

    store.subscribe(render);

    assert.equal(wrapper.props().value, 0);

    wrapper.find('button#increment').simulate('click');
    wrapper.find('button#increment').simulate('click');

    assert.equal(wrapper.props().value, 2);

    wrapper.find('button#decrement').simulate('click');

    assert.equal(wrapper.props().value, 1);
  });
});
