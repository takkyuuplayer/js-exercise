import assert from 'power-assert';

describe('Object', () => {
  describe('.assign', () => {
    it('will merge object and latter source will win', () => {
      const ret = Object.assign({}, { a: 1, b: 2 }, { b: 3, c: 4 });
      assert.deepEqual(ret, { a: 1, b: 3, c: 4 });
    });
  });
  describe('.keys', () => {
    it('should return keys of object', () => {
      const obj = { a: 1, b: 2 };
      assert.deepStrictEqual(Object.keys(obj), ['a', 'b']);
    });
  });
});

