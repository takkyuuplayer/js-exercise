import assert from 'power-assert';
import Immutable from 'immutable';
import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import todoApp from '../../src/redux/reducers/index.es6';
import TodoApp from '../../src/redux/components/TodoApp.es6';

describe("TodoApp", () => {

  let wrapper;
  const store = createStore(todoApp);
  const render = () => {
    wrapper = mount(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  };
  render();
  store.subscribe(render);

  it('has empty todos at first as property', () => {
    assert.deepEqual(store.getState().get('todos').toJS(), []);
  });

  it('has a test todo item', () => {
    wrapper.find('input').node.value = 'Test TODO';
    wrapper.find('button').simulate('click');

    wrapper.find('input').node.value = 'Test TODO2';
    wrapper.find('button').simulate('click');

    assert.deepEqual(store.getState().get('todos').toJS(), [{
      completed: false,
      text: 'Test TODO',
      id: 0
    }, {
      completed: false,
      text: 'Test TODO2',
      id: 1
    }]);

    assert.equal(wrapper.find('input').node.value, '');
  });

  it('can toggle status of item', () => {
    wrapper.find('li').first().simulate('click');

    assert.deepEqual(store.getState().get('todos').toJS(), [{
      completed: true,
      text: 'Test TODO',
      id: 0
    }, {
      completed: false,
      text: 'Test TODO2',
      id: 1
    }]);
  });

  describe('FilterLink', () => {
    it('can show all todos', () => {
      assert.equal(wrapper.find('li').length, 2);
    });

    it('can show completed todos', () => {
      wrapper.find('Link').at(1).simulate('click');
      assert.equal(wrapper.find('li').length, 1);
      assert.equal(wrapper.find('li').text(), 'Test TODO2');
    });

    it('can show active todos', () => {
      wrapper.find('Link').at(2).simulate('click');
      assert.equal(wrapper.find('li').length, 1);
      assert.equal(wrapper.find('li').text(), 'Test TODO');
    });
  });
});
