import assert from 'power-assert'

import { one, two } from '../src/export.js';
import { ONE, TWO } from '../src/export.js';
import { ichi, ni, san} from '../src/export.js';
import three from '../src/export.js';

import def, * as exported from '../src/export.js';

describe('import', () => {
  it('can import exported object', () => {
    assert.equal(one, 1);
    assert.equal(two, 2);
  });

  it('can import aliased exported values', () => {
    assert.equal(ONE, 1);
    assert.equal(TWO, 2);
  });

  it('can import exported "let" values', () => {
    assert.equal(ichi, 1);
    assert.equal(ni, undefined);
    assert.equal(san, 3);
  });

  it('can import exported default values', () => {
    assert.equal(three, 3);
  });

  it('can import default and *', () => {
    assert.equal(def, 3);
    assert.deepEqual(exported, {
      one: 1,
      two: 2,

      ONE: 1,
      TWO: 2,

      ichi: 1,
      ni:undefined,
      san: 3,

      "default": 3,

      a:   1,
      b:   2
    });
  });
});
