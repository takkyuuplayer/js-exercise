import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { render } from 'react-dom';

import SimpleForm from './SimpleForm';

const store = createStore(combineReducers({
  form: formReducer,
}));

const showResults = values =>
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);


render(
  <Provider store={store}>
    <SimpleForm onSubmit={showResults} />
  </Provider>,
  document.getElementById('root'),
);
