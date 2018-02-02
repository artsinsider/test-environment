import React, { Component } from 'react';
import Root from './components/Root/Root'
import store from './redux'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Root/>
      </Provider>
    );
  }
}

export default App;
