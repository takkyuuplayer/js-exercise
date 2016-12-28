import assert from 'power-assert';

import reducer from './index';

describe('Reducers', () => {
  describe('Initial state', () => {
    it('return 0', () => {
      assert.equal(reducer(undefined, {}), 0);
    });
  });
  describe('INCREMENT', () => {
    it('can increment counter', () => {
      assert.equal(reducer(undefined, { type: 'INCREMENT' }), 1);
      assert.equal(reducer(1, { type: 'INCREMENT' }), 2);
    });
  });
  describe('DECREMENT', () => {
    it('can decrement counter', () => {
      assert.equal(reducer(undefined, { type: 'DECREMENT' }), -1);
      assert.equal(reducer(10, { type: 'DECREMENT' }), 9);
    });
  });
});
