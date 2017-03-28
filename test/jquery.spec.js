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

  describe('on', () => {
    const $form = $(`
      <form>
        <h1>好きな色は?</h1>
        <input type="checkbox" name="color[]" value="1" >赤
        <input type="checkbox" name="color[]" value="2" >青
        <input type="checkbox" name="color[]" value="3" >緑
        <input type="checkbox" class="exclude" name="color[]" value="99" >この中にはない
        <input type="text" name="password" value="password">
      </form>`);

    const observe = ($target) => {
      $target.find('input.exclude').on('change', (e) => {
        $target.find('input[type="checkbox"]').each((idx, el) => {
          if (e.currentTarget === el) {
            return;
          }
          $(el).prop('disabled', true);
        });
      });
    };

    it('can add event', () => {
      observe($form);

      assert.strictEqual(0, $form.find('input[disabled]').length);

      $form.find('input.exclude').prop('checked', true).trigger('change');

      assert.strictEqual(3, $form.find('input[disabled]').length);
      assert.strictEqual(`<form>
        <h1>好きな色は?</h1>
        <input type="checkbox" name="color[]" value="1" disabled="">赤
        <input type="checkbox" name="color[]" value="2" disabled="">青
        <input type="checkbox" name="color[]" value="3" disabled="">緑
        <input type="checkbox" class="exclude" name="color[]" value="99">この中にはない
        <input type="text" name="password" value="password">
      </form>`, $form.prop('outerHTML'));
    });
  });
});
