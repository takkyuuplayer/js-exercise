import assert from 'power-assert';

describe('Array', () => {
  describe('reduceRight', () => {
    it('can reduce from right to left', () => {
      const ret = [2, 2, 3].reduceRight((prev, current, index, array) => {
          return index === 0 ? prev : [prev[0] * current].concat(prev);
        }, [1]);

      assert.deepStrictEqual(ret, [6, 3, 1]);
    });
  });
});
