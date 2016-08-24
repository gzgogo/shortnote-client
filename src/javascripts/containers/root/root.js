
import './root.styl';
import React from 'react';
import { createStore, Provider } from 'react-redux';
import App from '../app/app';

let store = createStore();

class root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default root;
