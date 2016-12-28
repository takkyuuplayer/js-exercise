import assert from 'power-assert';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Todo from './Todo';

describe('Todo component', () => {
  it('return <li>', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Todo completed={true} text="This is text" onClick={onClick} />
    );

    assert.strictEqual(wrapper.find('li').length, 1);

    wrapper.find('li').at(0).simulate('click');

    assert.strictEqual(onClick.callCount, 1);
  });
});
