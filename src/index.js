import React from 'react';
import ReactDOM from 'react-dom';
// local dependencies
import 'metrics';
import metadata from 'metadata';
// redux-utils
import { Provider } from 'react-redux';
import store from 'redux-utils/store';
// styles
import 'index.scss';
// main
import App from 'App';

console.log('metadata', metadata);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
