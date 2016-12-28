import assert from 'power-assert';

import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';
import FilterLink from '../containers/FilterLink';

describe('Footer', () => {
  const wrapper = shallow(
    <Footer />
  );
  it('contains 3 FilterLink', () => {
    assert.strictEqual(wrapper.find(FilterLink).length, 3);
  });
});
