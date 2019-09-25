import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportError from 'utils/crashReporter';
import App from './App';

const monitorError = () => {
  window.onerror = (message, file, line, column, errorObject) => {
    const stack = errorObject ? errorObject.stack : null;
    reportError(stack);
    return false;
  };
};

monitorError();
ReactDOM.render(<App />, document.getElementById('root'));
