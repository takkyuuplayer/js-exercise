import assert from 'power-assert';
import sinon from 'sinon';
import { createStore, applyMiddleware } from 'redux';

const spy = sinon.spy();

const logger = store => next => (action) => {
  spy(action);
  const result = next(action);
  spy(store.getState());
  return result;
};

const crashReporter = store => next => (action) => {
  try {
    return next(action);
  } catch (err) {
    spy(err, store.getState());
    throw err;
  }
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state === 1) {
        throw new Error('Too many count');
      }
      return state + 1;
    default:
      return state;
  }
};

describe('redux', () => {
  const store = createStore(counter, applyMiddleware(logger, crashReporter));

  describe('.applyMiddleware', () => {
    it('should call dispatched logger middleware', () => {
      store.dispatch({ type: 'INCREMENT' });

      assert.deepStrictEqual(spy.getCall(0).args[0], { type: 'INCREMENT' });
      assert.deepStrictEqual(spy.getCall(1).args[0], 1);
    });
    it('should call dispatched logger/crashReporter middleware', () => {
      assert.throws(() => store.dispatch({ type: 'INCREMENT' }));

      assert.deepStrictEqual(spy.getCall(0).args, [{ type: 'INCREMENT' }]);
      assert.deepStrictEqual(spy.getCall(1).args, [1]);
      assert.deepStrictEqual(spy.getCall(2).args, [{ type: 'INCREMENT' }]);
      assert.deepStrictEqual(spy.getCall(3).args, [new Error('Too many count'), 1]);
    });
  });
});
