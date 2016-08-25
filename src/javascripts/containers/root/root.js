
import './root.styl';
import React from 'react';
import { createStore } from  'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/reducers';
import App from '../app/app';

let store = createStore(rootReducer);

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
