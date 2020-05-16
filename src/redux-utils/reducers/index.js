/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { includes } from 'lodash';
// reducers
import userReducer from 'redux-utils/reducers/user';
import authReducer from 'redux-utils/reducers/auth';
// model
import reducerModel from 'models/reducerModel';

const limited = (reducer, predicate) => (state, action) =>
  predicate(action) ? reducer(state, action) : state;

const mainReducer = combineReducers({
  authStore: limited(authReducer, action =>
    action.meta === undefined
      ? true
      : includes(action.meta.reducerID, reducerModel.auth)
  ),
  userState: limited(userReducer, action =>
    action.meta === undefined
      ? true
      : includes(action.meta.reducerID, 'rx_user')
  )
});

const rootReducer = (state, action) => mainReducer(state, action);

export default rootReducer;
