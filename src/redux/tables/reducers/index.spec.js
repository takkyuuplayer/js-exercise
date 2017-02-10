import assert from 'power-assert';

import reducers from './index';

describe('reducers', () => {
  it('should return initial state', () => {
    assert.deepStrictEqual(reducers(undefined, {}), false);
  });
  it('can handle SET_EDIT_MODE action', () => {
    assert.deepStrictEqual(reducers(false, {
      type: 'SET_EDIT_MODE',
      bool: true,
    }), true);

    assert.deepStrictEqual(reducers(true, {
      type: 'SET_EDIT_MODE',
      bool: true,
    }), true);
  });
});
