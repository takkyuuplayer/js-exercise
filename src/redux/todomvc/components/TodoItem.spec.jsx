import assert from 'power-assert';
import React from 'react';
import sinon from 'sinon';
import TodoItem from './TodoItem';
import TodoTextInput from './TodoTextInput';
import { mount, shallow } from 'enzyme';

const setup = (editing = false, wrap = shallow) => {
  const props = {
    todo: {
      id: 0,
      text: 'Use Redux',
      completed: false,
    },
    editTodo: sinon.spy(),
    deleteTodo: sinon.spy(),
    completeTodo: sinon.spy(),
  };

  const wrapper = wrap(<TodoItem {...props} />);

  if (editing) {
    wrapper.find('label').props().onDoubleClick({});
  }

  return wrapper;
};

describe('components', () => {
  describe('TodoItem', () => {
    it('initial render', () => {
      const wrapper = setup();

      assert.strictEqual(wrapper.type(), 'li');
      assert.strictEqual(wrapper.props().className, '');

      const div = wrapper.children();

      assert.strictEqual(div.type(), 'div');
      assert.strictEqual(div.props().className, 'view');

      assert.strictEqual(div.childAt(0).type(), 'input');
      assert.strictEqual(div.childAt(0).props().checked, false);

      assert.strictEqual(div.childAt(1).type(), 'label');
      assert.strictEqual(div.childAt(1).props().children, 'Use Redux');

      assert.strictEqual(div.childAt(2).type(), 'button');
      assert.strictEqual(div.childAt(2).props().className, 'destroy');
    });

    it('input onChange should call completeTodo', () => {
      const wrapper = setup(false, mount);
      const input = wrapper.childAt(0).childAt(0);
      input.props().onChange({});
      assert.strictEqual(wrapper.props().completeTodo.callCount, 1);
    });

    it('button onClick should call deleteTodo', () => {
      const wrapper = setup(false, mount);
      const button = wrapper.childAt(0).childAt(2);
      button.props().onClick({});
      assert.strictEqual(wrapper.props().deleteTodo.withArgs(0).callCount, 1);
    });

    it('label onDoubleClick should put component in edit state', () => {
      const wrapper = setup(false, mount);
      const label = wrapper.childAt(0).childAt(1);
      label.props().onDoubleClick({});
      assert.strictEqual(wrapper.find('li').props().className, 'editing');
    });

    it('edit state render', () => {
      const wrapper = setup(true);

      assert.strictEqual(wrapper.type(), 'li');
      assert.strictEqual(wrapper.props().className, 'editing');

      const input = wrapper.childAt(0);
      assert.strictEqual(input.type(), TodoTextInput);
      assert.strictEqual(input.props().text, 'Use Redux');
      assert.strictEqual(input.props().editing, true);
    });

    it('TodoTextInput onSave should call editTodo', () => {
      const wrapper = setup(true, mount);
      wrapper.find(TodoTextInput).props().onSave('Use Redux');
      assert.strictEqual(wrapper.props().editTodo.withArgs(0, 'Use Redux').callCount, 1);
    });

    it('TodoTextInput onSave should call deleteTodo if text is empty', () => {
      const wrapper = setup(true, mount);
      wrapper.find(TodoTextInput).props().onSave('');
      assert.strictEqual(wrapper.props().deleteTodo.withArgs(0).callCount, 1);
    });

    it('TodoTextInput onSave should exit component from edit state', () => {
      const wrapper = setup(true, mount);
      wrapper.find(TodoTextInput).props().onSave('Use Redux');
      assert.strictEqual(wrapper.find('li').props().className, '');
    });
  });
});
