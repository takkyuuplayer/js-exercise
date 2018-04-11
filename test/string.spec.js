import assert from 'power-assert';

describe('string', () => {
  it('cast to boolean', () => {
    assert.strictEqual(!!'a', true);
    assert.strictEqual(!!'0', true);
    assert.strictEqual(!!'', false);

    assert.strictEqual('' || undefined, undefined);
  });

  describe('.replace', () => {
    it('should replace matched string', () => {
      assert.strictEqual('(123,123)'.replace(/\d/, ''), '(23,123)');
      assert.strictEqual('(123,123)'.replace(/\d+/, ''), '(,123)');
      assert.strictEqual('(123,123)'.replace(/\d+/g, ''), '(,)');
      assert.strictEqual('(123,123)'.replace(/\d+/g, ''), '(,)');
    });

    it('should replace matched string', () => {
      assert.strictEqual('r * r * pi'.replace(/\bpi\b/, 3.14), 'r * r * 3.14');

      const reg = new RegExp(/\bpi\b/);

      assert.strictEqual('r * r * pi'.replace(reg, 3.14), 'r * r * 3.14');

      const reg2 = new RegExp('\\bpi\\b', 'g');

      assert.strictEqual('r * r * pi'.replace(reg2, 3.14), 'r * r * 3.14');
    });

    it('should replace s+ ', () => {
      assert.strictEqual(' _ '.replace(/\s+/g, ''), '_');
    });
  });

  describe('.match', () => {
    it('should matched object', () => {
      const matched = '1 + 2 - 3 + 4'.match(/([-+])/);

      assert(matched instanceof Array);

      const expected = ['+', '+'];
      expected.index = 2;
      expected.input = '1 + 2 - 3 + 4';

      assert.deepEqual(matched, expected);
    });

    it('should return array of matched values for /g', () => {
      const matched = '1 + 2 - 3 + 4'.match(/([-+])/g);

      assert(matched);
      assert(matched instanceof Array);
      assert.deepStrictEqual(matched, ['+', '-', '+']);
    });
  });
});
