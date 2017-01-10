import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import assert from 'power-assert';

import TodoTextInput from './TodoTextInput';

const setup = (propOverrides = {} ) => {
  const props = Object.assign({
    onSave: sinon.spy(),
    text: 'Use Redux',
    placeholder: 'What needs to be done?',
    editing: false,
    newTodo: false,
  }, propOverrides);

  return mount(
    <TodoTextInput {...props} />
  );
};

describe('components', () => {
  describe('TodoTextInput', () => {
    it('should render correctly', () => {
      const wrapper = setup();
      assert.strictEqual(wrapper.find('input').props().placeholder, 'What needs to be done?');
      assert.strictEqual(wrapper.find('input').props().value, 'Use Redux');
      assert.strictEqual(wrapper.find('input').props().className, '');
    });

    it('should render correctly when editing=true', () => {
      const wrapper = setup({ editing: true });
      assert.strictEqual(wrapper.find('input').props().className, 'edit');
    });

    it('should render correctly when newTodo=true', () => {
      const wrapper = setup({ newTodo: true });
      assert.strictEqual(wrapper.find('input').props().className, 'new-todo');
    });

    it('should update value on change', () => {
      const wrapper = setup();
      wrapper.find('input').props().onChange({ target: { value: 'Use Radox' } });
      assert.strictEqual(wrapper.find('input').props().value, 'Use Radox');
    });

    it('should call onSave on return key press', () => {
      const wrapper = setup();
      wrapper.find('input').props().onKeyDown({ which: 13, target: { value: 'Use Redux' } });
      assert.strictEqual(wrapper.props().onSave.withArgs('Use Redux').callCount, 1);
    });

    it('should reset state on return key press if newTodo', () => {
      const wrapper = setup({ newTodo: true });
      wrapper.find('input').props().onKeyDown({ which: 13, target: { value: 'Use Redux' } });
      assert.strictEqual(wrapper.find('input').props().value, '');
    });

    it('should call onSave on blur', () => {
      const wrapper = setup();
      wrapper.find('input').props().onBlur({ target: { value: 'Use Redux' } });
      assert.strictEqual(wrapper.props().onSave.withArgs('Use Redux').callCount, 1);
    });

    it('shouldnt call onSave on blur if newTodo', () => {
      const wrapper = setup({ newTodo: true });
      wrapper.find('input').props().onBlur({ target: { value: 'Use Redux' } });
      assert.strictEqual(wrapper.props().onSave.withArgs('Use Redux').callCount, 0);
    });
  });
});

