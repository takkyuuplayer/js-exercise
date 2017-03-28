import assert from 'power-assert';
import $ from 'jquery';

describe('jQuery', () => {
  describe('jQuery(<html tag />)', () => {
    const $div = $('<div>foo</div>');

    it('should instance of jQuery', () => {
      assert.strictEqual($div instanceof $, true);

      assert.strictEqual($div.prop('outerHTML'), '<div>foo</div>');
    });
  });

  describe('form management', () => {
    const $form = $(`
      <form>
        <input type="text" name="email" value="test@test.com">
        <input type="text" name="password" value="password">
      </form>`);

    it('should return form values for serializeArray', () => {
      assert.deepStrictEqual($form.serializeArray(), [
        { name: 'email', value: 'test@test.com' },
        { name: 'password', value: 'password' },
      ]);
    });
  });
});
