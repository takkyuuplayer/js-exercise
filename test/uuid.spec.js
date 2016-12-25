const assert = require('power-assert');
const uuid = require('uuid');

describe('uuid', () => {
  it('can generate v4 uuid', () => {
    assert(uuid.v4().match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/));
  });
});
