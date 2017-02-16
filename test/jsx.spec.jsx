import assert from 'power-assert';
import React from 'react';
import { shallow } from 'enzyme';

describe('jsx', () => {
  const wrapper = shallow(
    <div>
      { undefined }
      { null }
      { 1 }
      { false }
      { true }
      { 'string' }
    </div>,
  );
  it('should return div', () => {
    assert.strictEqual(wrapper.html(), '<div>1string</div>');
  });
});
