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
