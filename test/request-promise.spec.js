import http from 'http';
import assert from 'power-assert';
import request from 'request-promise';

describe('request-promise', () => {
  it('should make a GET request', async () => {
    const server = http.createServer((req, res) => res.end('あばば'));
    server.listen(5000);

    const body = await request('http://localhost:5000');

    assert(body === 'あばば');

    server.close();
  });
});

