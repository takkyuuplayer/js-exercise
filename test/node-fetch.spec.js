import assert from 'power-assert';

import fetch from 'node-fetch';

/* eslint-disable no-console */
describe('node-fetch', () => {
  it('should fetch response as same interface as fetch', (done) => {
    fetch('https://api.github.com/')
      .then(res => res.json()).then((json) => {
        assert.strictEqual(json.current_user_url, 'https://api.github.com/user');

        done();
      });
  });

  it('can be applied async/await', async () => {
    const json = await fetch('https://api.github.com/').then(response => response.json());
    assert.strictEqual(json.current_user_url, 'https://api.github.com/user');
  });

  it('should fetch response as same interface as fetch', async () => {
    const json = await fetch('https://api.github.com/a')
      .then(res => res.json())
      .then(() => console.log('aaa'));

    console.log(json);
  });
});
