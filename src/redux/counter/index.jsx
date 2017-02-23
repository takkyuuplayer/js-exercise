import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import LocalStateCounter from './components/LocalStateCounter';
import counter from './reducers';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <div>
      <h1>Global state counter</h1>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
      <h1>Local state counter</h1>
      <LocalStateCounter />
    </div>,
  document.getElementById('root'),
  );
};

render();
store.subscribe(render);
