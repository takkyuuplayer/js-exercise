import assert from 'power-assert';

import _ from 'lodash';
import fp from 'lodash/fp';

describe('lodash', () => {
  describe('.some', () => {
    it('should return true if some item match condition', () => {
      assert.strictEqual(_.some([1, 2, 3], num => num % 2 === 0), true);

      assert.strictEqual(fp.some([1, 2, 3], num => num % 2 === 0), false);
    });
  });
  describe('.last', () => {
    it('should return undefined for empty array', () => {
      assert.strictEqual(_.last([]), undefined);
      assert.strictEqual(fp.last([]), undefined);
    });
  });
  describe('.isUndefined', () => {
    it('should return true for undefined value', () => {
      assert.strictEqual(_.isUndefined(undefined), true);
      assert.strictEqual(fp.isUndefined(undefined), true);

      assert.strictEqual(_.isUndefined(1), false);
      assert.strictEqual(fp.isUndefined(1), false);

      const obj = { a: 1 };

      assert.strictEqual(_.isUndefined(obj.a), false);
      assert.strictEqual(_.isUndefined(obj.b), true);
      assert.strictEqual(fp.isUndefined(obj.a), false);
      assert.strictEqual(fp.isUndefined(obj.b), true);
    });
  });
  describe('range', () => {
    it('should return range not including the last number', () => {
      assert.deepStrictEqual(_.range(0, 5), [0, 1, 2, 3, 4]);
      assert.deepStrictEqual(fp.range(0, 5), [0, 1, 2, 3, 4]);
    });
  });
});
