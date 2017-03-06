import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import LocalStateApp from './components/LocalStateApp';
import reducer from './reducers';

const store = createStore(reducer);

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <Provider store={store}>
      <LocalStateApp />
    </Provider>
    <LocalStateApp />
  </div>,
  document.getElementById('root'),
);
