import assert from 'power-assert';
import redis from 'redis';

describe('redis', () => {
  let client;

  describe('.createClient', () => {
    it('should connect redis server', (done) => {
      client = redis.createClient({ host: 'redis' });

      client.once('ready', () => {
        assert(client);
        done();
      });
    });
  });

  before((done) => {
    client = redis.createClient({ host: 'redis' });
    client.once('ready', () => {
      client.flushdb(done);
    });
  });

  describe('.set/.get', () => {
    it('should set key-value,', (done) => {
      client.set('key1', 'val1', () => {
        client.get('key1', (err, ret) => {
          assert.strictEqual(ret, 'val1');
          done();
        });
      });
    });
  });

  describe('.keys', () => {
    it('should return all keys meeting criteria', (done) => {
      client.set('key2', 'val2', () => {
        client.keys('*', (err, replies) => {
          assert.deepStrictEqual(replies.length, 2);
          done();
        });
      });
    });
  });
});
