import assert from 'power-assert';

import jwt from 'jsonwebtoken';

describe('jsonwebtoken', () => {
  describe('.sign', () => {
    it('should sign object with iat', () => {
      const token = jwt.sign({ foo: 'bar' }, 'secret');
      const decoded = jwt.verify(token, 'secret');

      assert.strictEqual(decoded.foo, 'bar');
      assert(decoded.iat);
    });
  });
  describe('.verify', () => {
    it('should throw exception when token is invalid', () => {
      const token = jwt.sign({ foo: 'bar' }, 'secret');
      assert.throws(() => { jwt.verify(token, 'wrong'); });
    });
  });
});
