import React from 'react';
import { createStore } from 'redux';

import reducers from '../reducers/';
import Counter from './Counter';

class LocalStateCounter extends React.Component {
  constructor() {
    super();

    const store = createStore(reducers);
    store.subscribe(() => this.setState(store.getState()));

    this.dispatch = store.dispatch;
  }
  render() {
    return (
      <Counter
        value={this.state}
        onIncrement={() => this.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => this.dispatch({ type: 'DECREMENT' })}
      />
    );
  }
}

export default LocalStateCounter;
