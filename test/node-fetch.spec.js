import assert from 'power-assert';

import fetch from 'node-fetch';

describe('node-fetch', () => {
  it('should fetch response as same interface as fetch', (done) => {
    fetch('https://api.github.com/')
      .then(res => res.json()).then((json) => {
        assert.strictEqual(json.current_user_url, 'https://api.github.com/user');

        done();
      });
  });
});
