import assert from 'power-assert';
import React from 'react';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SimpleForm from './SimpleForm';

describe('redux-form', () => {
  const spy = sinon.spy();

  const store = createStore(combineReducers({
    form: formReducer,
  }));
  const wrapper = mount(
    <Provider store={store}>
      <SimpleForm handleFormValues={spy} />
    </Provider>,
  );

  it('has initial state', () => {
    assert.deepStrictEqual(store.getState(), {
      form: {
        simple: {
          registeredFields: {
            firstName: {
              count: 1,
              name: 'firstName',
              type: 'Field',
            },
            lastName: {
              count: 1,
              name: 'lastName',
              type: 'Field',
            },
          },
        },
      },
    });
  });

  it('changes its form.simple state with the form values', () => {
    wrapper.find('input').first().simulate('change', { target: { value: 'takkyuu' } });

    assert.deepStrictEqual(store.getState(), {
      form: {
        simple: {
          values: {
            firstName: 'takkyuu',
          },
          registeredFields: {
            firstName: {
              count: 1,
              name: 'firstName',
              type: 'Field',
            },
            lastName: {
              count: 1,
              name: 'lastName',
              type: 'Field',
            },
          },
        },
      },
    });
  });

  it('can handle submit event', () => {
    wrapper.find('form').simulate('submit');

    assert.strictEqual(spy.calledWith({
      firstName: 'takkyuu',
    }), true);
  });

});
