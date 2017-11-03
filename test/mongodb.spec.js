import assert from 'power-assert';

import mongodb from 'mongodb';

describe('mongodb', () => {
  describe('.MongoClient', () => {
    describe('.connect', () => {
      it('should connect db', async () => {
        const db = await mongodb.MongoClient.connect('mongodb://mongo:27017/test');

        assert(db);

        await db.close()
      });

    });
  });
});
