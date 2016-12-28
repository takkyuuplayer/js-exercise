import assert from 'power-assert';
import React from 'react';
import { shallow, mount } from 'enzyme';

class Foo extends React.Component {
  render() {
    return (
      <div className="foo" />
    );
  }
}

describe('Spread properties', () => {
  const props = {
    x: 10,
    y: 20,
  };
  it('... can spread properties', () => {
    const wrapper = mount(<Foo {...props} />);
    assert.equal(wrapper.find('div.foo').length, 1);
    assert.deepEqual(wrapper.props(), { x: 10, y: 20 });
  });
});
