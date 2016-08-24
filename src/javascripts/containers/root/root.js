
import './root.styl';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../reducers/configureStore';
import App from '../app/app';

const store = configureStore();

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
