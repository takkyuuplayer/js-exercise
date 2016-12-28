import assert from 'power-assert';

import three, {
  one, two,
  ONE, TWO,
  ichi, ni, san,
} from '../src/export';

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
});
