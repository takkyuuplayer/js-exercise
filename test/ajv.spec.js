import assert from 'power-assert';

import Ajv from 'ajv';

describe('ajv', () => {
  const ajv = new Ajv();

  describe('compile method', () => {
    const validate = ajv.compile({
      type: 'integer',
    });
    it('return validation function', () => {
      assert.equal(typeof validate, 'function');
    });

    describe('the validation function', () => {
      it('can validate data', () => {
        assert.equal(validate(1), true);
        assert.equal(validate('1'), false);
      });
    });
  });

  describe('validate method', () => {
    it('can accpept schema to validate', () => {
      assert.equal(ajv.validate({ type: 'integer' }, 1), true);
      assert.equal(ajv.validate({ type: 'integer' }, '1'), false);

      assert.equal(ajv.validate({ type: 'string' }, 1), false);
      assert.equal(ajv.validate({ type: 'string' }, '1'), true);
    });
  });
});
