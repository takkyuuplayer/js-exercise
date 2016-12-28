import assert from 'power-assert';

import visibilityFilter from './visibilityFilter';

describe('visibilityFilter reducer', () => {
  it('return initial state', () => {
    assert.strictEqual(visibilityFilter(undefined, {}), 'SHOW_ALL');
  });

  it('can handle SET_VISIBILITY_FILTER', () => {
    assert.strictEqual(visibilityFilter('SHOW_ALL', {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED',
    }), 'SHOW_COMPLETED');
  });
});
