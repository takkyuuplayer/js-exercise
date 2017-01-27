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
    it('return shallow copy of part of array without altering original array', () => {
      let arr = [1, 2, 3];

      assert.deepStrictEqual(arr.slice(), [1, 2, 3]);

      assert.deepStrictEqual(arr.slice(0), [1, 2, 3]);
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

      assert.deepStrictEqual(arr.slice(0,0), []);
    });
  });

  describe('.concat', () => {
    it('return combined array', () => {
      const arr = [1, 2, 3];

      assert.deepStrictEqual(arr.concat([4]), [1,2,3,4]);
      assert.deepStrictEqual(arr, [1,2,3]);
    });

    it('combining is done by shallow copy', () => {
      const arr = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      let arr2 = arr.concat([[7,8,9]]);

      assert.deepStrictEqual(arr2, [ [1,2,3], [4,5,6], [7,8,9]]);

      arr2[1][1] = 100;

      assert.deepStrictEqual(arr, [ [1,2,3], [4,100,6]]);
      assert.deepStrictEqual(arr2, [ [1,2,3], [4,100,6], [7,8,9]]);
    });
  });

  describe('.every', () => {
    it('return true when all items meat the condition', () => {
      assert.strictEqual([2,4,6].every((item) => ( item % 2 === 0)), true);
    });
    it('return false when some item(s) do not meat the condition', () => {
      assert.strictEqual([2,3,4].every((item) => ( item % 2 === 0)), false);
    });
    it('return always true for empty array', () => {
      assert.strictEqual([].every((item) => ( item % 2 === 0)), true);
      assert.strictEqual([].every((item) => ( item % 2 === 1)), true);
    });
  });
});
