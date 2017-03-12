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

      assert.strictEqual(body, 'Hello World!');
    });
  });

  describe('routes', () => {
    describe('.all', () => {
      const app = express();
      app.all('/', (req, res, next) => {
        /* eslint-disable no-param-reassign */
        req.hoge = 'hoge';
        /* eslint-enable no-param-reassign */
        next();
      });

      it('should be called before routing', async () => {
        app.get('/', (req, res) => {
          assert.strictEqual(req.hoge, 'hoge');
          res.send('Hello World!');
        });
        app.listen(3001, () => {});

        const body = await request('http://localhost:3001');

        assert.strictEqual(body, 'Hello World!');
      });
    });
  });

  describe('middleware', () => {

  });
});

