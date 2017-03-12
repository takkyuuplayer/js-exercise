import express from 'express';
import assert from 'power-assert';
import request from 'request-promise';

describe('exporess', () => {
  describe('app', () => {
    const app = express();
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    it('should return hello world', async () => {
      app.listen(3000, () => {});

      const body = await request('http://localhost:3000');

      assert(body === 'Hello World!');
    });
  });
});

