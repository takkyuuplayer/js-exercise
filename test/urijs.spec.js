const assert = require('power-assert');
const urijs = require('urijs');

describe('urijs', () => {
  describe('.query', () => {
    it('can add query parameters', () => {
      const uri = urijs('https://github.com/login/oauth/authorize').query({
        client_id: 12345,
        scope: 'user:email',
        state: 'abcdefg',
      });
      assert.equal(uri.toString(), 'https://github.com/login/oauth/authorize?client_id=12345&scope=user%3Aemail&state=abcdefg');
    });
    it('can generate query string', () => {
      const uri = urijs('').query({
        client_id: 12345,
        scope: 'user:email',
        state: 'abcdefg',
      });
      assert.equal(uri.toString(), '?client_id=12345&scope=user%3Aemail&state=abcdefg');
    });
  });
});
