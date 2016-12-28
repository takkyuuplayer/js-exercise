import assert from 'power-assert';

import sinon from 'sinon';

describe('sinon', () => {
  describe('.spy', () => {
    const callback = sinon.spy();

    it('will return function', () => {
      assert.strictEqual(typeof callback, 'function');
    });

    it('can count how many the function has been called', () => {
      assert.strictEqual(callback.callCount, 0);

      callback();

      assert.strictEqual(callback.callCount, 1);
    });
  });
});
