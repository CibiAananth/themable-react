/* eslint-disable consistent-return */
import reportError from 'utils/crashReporter';

const decycle = obj => {
  let cache = [];

  const stringified = JSON.stringify(obj, (_key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return;
      }
      cache.push(value);
    }
    return value;
  });
  cache = null;

  return stringified;
};

const crashReporter = stateSanitizer => store => next => action => {
  try {
    return next(action);
  } catch (err) {
    let stateToSend = store.getState();
    if (stateSanitizer && typeof stateSanitizer === 'function') {
      stateToSend = stateSanitizer(stateToSend);
    }
    const decycledAction = decycle(action);
    const decycledState = decycle(stateToSend);
    reportError(err, {
      action: decycledAction,
      state: decycledState
    });
  }
};

export default crashReporter;
