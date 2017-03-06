import assert from 'power-assert';

describe('Math', () => {
  describe('.max', () => {
    it('should return larger number', () => {
      assert.strictEqual(Math.max(1, 2), 2);
    });
  });
});
