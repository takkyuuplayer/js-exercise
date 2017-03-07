import assert from 'power-assert';

describe('string', () => {
  it('cast to boolean', () => {
    assert.strictEqual(!!'a', true);
    assert.strictEqual(!!'0', true);
    assert.strictEqual(!!'', false);
  });
});
