import assert from 'power-assert';
import fetch from 'node-fetch';
import fetchMock from 'fetch-mock';

describe('fetch', () => {
  it('can handle JSON response', (done) => {
    fetch('https://api.github.com/')
      .then(res => res.json()).then((json) => {
        assert.strictEqual(json.current_user_url, 'https://api.github.com/user');
        done();
      });
  });
});

describe('fetch-mock', () => {
  fetchMock.mock('*/fetch-mock', { fetch: 'mocked' });

  it('should mock response', () => {
    fetch('https://api.github.com/fetch-mock')
      .then(res => res.json()).then((json) => {
        assert.strictEqual(json, { fetch: 'mocked' });
      });
  });

  fetchMock.restore();
});
