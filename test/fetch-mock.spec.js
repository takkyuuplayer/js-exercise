import assert from 'power-assert';
import fetchMock from 'fetch-mock';

describe('fetch-mock', () => {
  fetchMock.getOnce('*', { fetch: 'mocked' });

  it('should mock response', (done) => {
    fetch('/fetch-mock')
      .then(res => res.json()).then((json) => {
        assert.deepStrictEqual(json, { fetch: 'mocked' });

        done();
      });
  });
});
