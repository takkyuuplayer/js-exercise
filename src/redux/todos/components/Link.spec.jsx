import assert from 'power-assert';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Link from './Link';

describe('Link Component', () => {
  it('return <span> if active', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Link active={true} onClick={onClick}>Active</Link>
    );

    assert.strictEqual(wrapper.find('span').text(), 'Active');
  });
  it('return <a> if not active', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Link active={false} onClick={onClick}>Active</Link>
    );

    assert.strictEqual(wrapper.find('a').text(), 'Active');

    wrapper.find('a').at(0).simulate('click');

    assert.strictEqual(onClick.callCount, 1);
  });
});
