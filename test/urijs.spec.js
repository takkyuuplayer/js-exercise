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
    it('should remove current query', () => {
      const uri = urijs('https://github.com/takkyuuplayer?hoge=1').query({
        client_id: 12345,
        scope: 'user:email',
        state: 'abcdefg',
      });
      assert.equal(uri.toString(), 'https://github.com/takkyuuplayer?client_id=12345&scope=user%3Aemail&state=abcdefg');
    });
  });
  describe('.addSearch', () => {
    it('should add query', () => {
      const uri = urijs('https://github.com/takkyuuplayer?hoge=1').addSearch({
        client_id: 12345,
      });
      assert.equal(uri.toString(), 'https://github.com/takkyuuplayer?hoge=1&client_id=12345');
    });
    it('should do nothing for undefined', () => {
      const uri = urijs('https://github.com/takkyuuplayer?hoge=1').addSearch({});
      assert.equal(uri.toString(), 'https://github.com/takkyuuplayer?hoge=1');
    });
  });
  describe('.parse', () => {
    it('should parse uri', () => {
      const res = urijs.parse('https://github.com/login/oauth/authorize?client_id=12345&scope=user%3Aemail&state=abcdefg');
      assert.deepStrictEqual(
        res,
        {
          query: 'client_id=12345&scope=user%3Aemail&state=abcdefg',
          protocol: 'https',
          username: null,
          password: null,
          hostname: 'github.com',
          port: null,
          preventInvalidHostname: false,
          path: '/login/oauth/authorize',
        },
      );
    });
  });
  describe('.parseQuery', () => {
    it('should parse query', () => {
      assert.deepStrictEqual(
        urijs.parseQuery('https://github.com/login/oauth/authorize?client_id=12345&scope=user%3Aemail&state=abcdefg'),
        {
          'https://github.com/login/oauth/authorize?client_id': '12345',
          scope: 'user:email',
          state: 'abcdefg',
        },
      );

      assert.deepStrictEqual(
        urijs.parseQuery('?client_id=12345&scope=user%3Aemail&state=abcdefg'),
        {
          client_id: '12345',
          scope: 'user:email',
          state: 'abcdefg',
        },
      );

      assert.deepStrictEqual(
        urijs.parseQuery('client_id=12345&scope=user%3Aemail&state=abcdefg'),
        {
          client_id: '12345',
          scope: 'user:email',
          state: 'abcdefg',
        },
      );
    });
  });
});
