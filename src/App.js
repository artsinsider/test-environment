import React, { Component } from 'react';
import Root                 from './components/Root/Root'
import store                from './redux'
import {Provider}           from 'react-redux'
import {ConnectedRouter}    from 'react-router-redux'
import history              from './config/history'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <Root/>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
