import assert from 'power-assert';

describe('Array', () => {
  it('fill in empty for over range', () => {
    let arr = [0, 1, 2];
    arr[5] = 5;
    assert.deepStrictEqual(arr, [0,1,2,,,5]);
  });
  describe('.reduceRight', () => {
    it('can reduce from right to left', () => {
      const ret = [2, 2, 3].reduceRight((prev, current, index, array) => {
          return index === 0 ? prev : [prev[0] * current].concat(prev);
        }, [1]);

      assert.deepStrictEqual(ret, [6, 3, 1]);
    });
  });
  describe('.slice', () => {
    it('return part of array without altering original array', () => {
      let arr = [1, 2, 3];

      assert.deepStrictEqual(arr.slice(0), [1, 2, 3]);
      assert.deepStrictEqual(arr.slice(1), [2, 3]);
      assert.deepStrictEqual(arr.slice(2), [3]);
      assert.deepStrictEqual(arr.slice(3), []);
      assert.deepStrictEqual(arr.slice(4), []);

      assert.deepStrictEqual(arr.slice(-1), [3]);
      assert.deepStrictEqual(arr.slice(-2), [2, 3]);
      assert.deepStrictEqual(arr.slice(-3), [1,2,3]);
      assert.deepStrictEqual(arr.slice(-4), [1,2,3]);

      assert.deepStrictEqual(arr, [1, 2, 3]);
    });
  });
});
