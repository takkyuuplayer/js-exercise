import assert from 'power-assert';

import * as actions from './index';

describe('actions', () => {
  it('setEditMode returns SET_EDIT_MODE action', () => {
    assert.deepStrictEqual(actions.setEditMode(true), {
      type: 'SET_EDIT_MODE',
      bool: true,
    });
  });
});
