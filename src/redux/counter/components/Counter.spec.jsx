import assert from 'power-assert';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Counter from './Counter';

function setUp(value = 0) {
  const actions = {
    onIncrement: sinon.spy(),
    onDecrement: sinon.spy(),
  };
  const component = shallow(
    <Counter value={value} {...actions} />
  );

  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('p'),
  };
};

describe('Components', () => {
  describe('counter', () => {
    it('should display count', () => {
      const { p } = setUp();

      assert.strictEqual(/^Clicked: 0 times/.test(p.text()), true);
    });

    it('first button should call onIncrement', () => {
      const { buttons, actions } = setUp();
      buttons.at(0).simulate('click');

      assert.strictEqual(actions.onIncrement.callCount, 1);
    });

    it('2nd button should call onDecrement', () => {
      const { buttons, actions } = setUp();
      buttons.at(1).simulate('click');

      assert.strictEqual(actions.onDecrement.callCount, 1);
    });

    it('3rd button should not call onIncrement if the counter is even', () => {
      const { buttons, actions } = setUp(100);
      buttons.at(2).simulate('click');

      assert.strictEqual(actions.onIncrement.callCount, 0);
    });

    it('3rd button should not call onIncrement if the counter is odd', () => {
      const { buttons, actions } = setUp(101);
      buttons.at(2).simulate('click');

      assert.strictEqual(actions.onIncrement.callCount, 1);
    });

    it('4th button should call onIncrement in a second', (done) => {
      const { buttons, actions } = setUp(100);
      buttons.at(3).simulate('click');

      setTimeout(() => {
        assert.strictEqual(actions.onIncrement.callCount, 1);
        done();
      }, 1000);
    });
  });
});
