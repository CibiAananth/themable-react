/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { includes } from 'lodash';
// reducers
import authReducer from 'redux-utils/reducers/auth';
import datasetsReducer from 'redux-utils/reducers/datasets';
import problemsReducer from 'redux-utils/reducers/problems';
import tagsReducer from 'redux-utils/reducers/tags';
// model
import { reducerModel } from 'models/index';

const limited = (reducer, predicate) => (state, action) =>
  predicate(action) ? reducer(state, action) : state;

const mainReducer = combineReducers({
  authStore: limited(authReducer, action =>
    action.meta === undefined
      ? true
      : includes(action.meta.reducerID, reducerModel.auth)
  ),
  datasetsStore: limited(datasetsReducer, action =>
    action.meta === undefined
      ? true
      : includes(action.meta.reducerID, reducerModel.datasets)
  ),
  problemsStore: limited(problemsReducer, action =>
    action.meta === undefined
      ? true
      : includes(action.meta.reducerID, reducerModel.problems)
  ),
  tagsStore: limited(tagsReducer, action =>
    action.meta === undefined
      ? true
      : includes(action.meta.reducerID, reducerModel.tags)
  )
});

const rootReducer = (state, action) => mainReducer(state, action);

export default rootReducer;
