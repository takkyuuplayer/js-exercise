/* eslint-disable no-mixed-operators */
import assert from 'power-assert';

import Calculator from './calculator';

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('new', () => {
    it('should create instance', () => {
      assert(calculator instanceof Calculator);
    });
  });

  describe('1st step', () => {
    it('should return numbers correctly', () => {
      assert.strictEqual(calculator.calc('0'), 0);
      assert.strictEqual(calculator.calc('-3'), -3);
      assert.strictEqual(calculator.calc(' 3'), 3);
      assert.strictEqual(calculator.calc('-1.5'), -1.5);
    });

    it('can operate +', () => {
      assert.strictEqual(calculator.calc('1 + 2 + 3'), 6);
    });

    it('can operate +-', () => {
      assert.strictEqual(calculator.calc('1 - 2 + 3'), 2);
    });

    it('can operate +-*/', () => {
      assert.strictEqual(
        calculator.calc('3 + 4 * 5 / 7'),
        3 + 4 * 5 / 7,
      );
    });
  });

  describe('2nd step', () => {
    it('can operate () correctly', () => {
      assert.strictEqual(
        calculator.calc('( 3 + 4 ) * 5 / 7'),
        5,
      );
    });
  });

  describe('3rd step', () => {
    it('can calculate with variables', () => {
      assert.deepStrictEqual(
        calculator.calcWithVars(['pi = 3', 'pizza = 9 * 9 * pi']),
        [3, 9 * 9 * 3],
      );
    });
  });
});
