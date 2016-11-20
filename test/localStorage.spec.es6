import assert from 'power-assert';
import localStorage from 'localStorage';

describe('localStorage', () => {
  describe('setItem', () => {
    it('should set key-value pair', () => {
      assert.equal(typeof localStorage.setItem('key', JSON.stringify({a:1, b:2, c:3})), 'undefined');
    });
  });
  describe('getItem', () => {
    it('should return corresponding value with key', () => {
      assert.equal(localStorage.getItem('key'), '{"a":1,"b":2,"c":3}');
    });
  });
});
