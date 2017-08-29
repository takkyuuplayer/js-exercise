import assert from 'power-assert';
import redis from 'redis';

describe('redis', () => {
  let client;

  describe('.createClient', () => {
    it('should connect redis server', (done) => {
      client = require('redis').createClient({"host": "redis"});

      client.once('ready', function() {
        assert(client);
        done();
      });
    });
  });

  before(function(done) {
    client = require('redis').createClient({"host": "redis"});
    client.once('ready', function() {
      client.flushdb(done);
    });
  });

  describe('.set/.get', () => {
    it('should set key-value,', (done) => {
      client.set("key1", "val1", () => {
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
          assert.deepStrictEqual(replies, ['key2', 'key1']);
          done();
        });
      });
    });
  });
});
