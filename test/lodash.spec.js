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
});
