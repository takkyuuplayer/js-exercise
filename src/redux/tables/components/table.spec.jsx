import assert from 'power-assert';
import { mount } from 'enzyme';
import React from 'react';

import CellEditableTable from './CellEditableTable';
import sinon from 'sinon';

describe('component CellEditableTable', () => {
  context('when cellEditable = false', () => {
    it('return table without input', () => {
      const wrapper = mount(<CellEditableTable rowSize={5} colSize={10} />);

      assert.strictEqual(wrapper.find('table').length, 1);
      assert.strictEqual(wrapper.find('tr').length, 5);
      assert.strictEqual(wrapper.find('td').length, 50);
      assert.strictEqual(wrapper.find('input').length, 0);
    });
  });

  context('when cellEditable = true', () => {
    it('return table with input field', () => {
      const spy = sinon.spy();
      const wrapper = mount(
        <CellEditableTable rowSize={5} colSize={10} cellEditable onCellEdit={spy} />,
      );

      assert.strictEqual(wrapper.find('table').length, 1);
      assert.strictEqual(wrapper.find('tr').length, 5);
      assert.strictEqual(wrapper.find('td').length, 50);
      assert.strictEqual(wrapper.find('input').length, 50);

      wrapper.find('input').at(25).simulate('change', { target: { value: 'My new value' } });

      assert.strictEqual(spy.withArgs('My new value').calledOnce, true);
    });
  });
});
