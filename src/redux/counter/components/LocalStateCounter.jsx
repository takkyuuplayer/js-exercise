import React from 'react';

import reducers from '../reducers/';
import Counter from './Counter';

class LocalStateCounter extends React.Component {
  constructor() {
    super();

    this.dispatch = this.dispatch.bind(this);
  }
  state = {
    counter: reducers(undefined, {}),
  }
  dispatch(action) {
    this.setState({
      counter: reducers(this.state.counter, action),
    });
  }
  render() {
    return (
      <Counter
        value={this.state.counter}
        onIncrement={() => this.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => this.dispatch({ type: 'DECREMENT' })}
      />
    );
  }
}

export default LocalStateCounter;
