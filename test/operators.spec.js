import assert from 'power-assert';

describe('operator &&', () => {
  it('should return first false operand', () => {
    assert.strictEqual(0 && 1 && false, 0);
    assert.strictEqual(1 && false && 0, false);
  });
  it('should return last operand if all other operands are true value', () => {
    assert.strictEqual(1 && 1, 1);
    assert.strictEqual(1 && 0, 0);
  });
});

describe('operator ||', () => {
  it('should return first true operand', () => {
    assert.strictEqual(0 || 1 || false, 1);
    assert.strictEqual(1 || false || 0, 1);
  });
  it('should return last operand if all other operands are false value', () => {
    assert.strictEqual(undefined || false || 1, 1);
    assert.strictEqual(undefined || false || 0, 0);
  });
});

/* eslint-disable no-bitwise */
describe('operator ~', () => {
  it('is Bitwise NOT operator', () => {
    assert.strictEqual(~0, -1);
    assert.strictEqual(~10, -11);
  });
  describe('double tilde ~~', () => {
    it('can be used as Math.floor', () => {
      assert.strictEqual(~10.1, -11);
      assert.strictEqual(~~10.1, 10);
      assert.strictEqual(~~10.9999999, 10);
    });
  });
});
/* eslint-enable no-bitwise */
