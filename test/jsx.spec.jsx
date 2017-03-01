import assert from 'power-assert';
import React from 'react';
import { shallow } from 'enzyme';

describe('jsx', () => {
  it('should ignore undefined, null, boolean', () => {
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
    assert.strictEqual(wrapper.html(), '<div>1string</div>');
  });

  describe('div', () => {
    const wrapper = <div>111</div>;

    assert.strictEqual(wrapper.type, 'div');
  });
});
