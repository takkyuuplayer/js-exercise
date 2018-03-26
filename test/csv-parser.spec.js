import assert from 'power-assert';

import fs from 'fs';
import parse from 'csv-parse/lib/sync';

describe('csv-parse/lib/sync', () => {
  it('can parse csv', () => {
    const csv = fs.readFileSync(`${__dirname}/data/test.csv`);
    const records = parse(csv, { columns: true });

    assert.deepStrictEqual(
      [{ col1: 'a', col2: 'b', col3: 'c' },
        { col1: 'd', col2: 'e', col3: 'f' }]
      , records,
    );
  });
});
