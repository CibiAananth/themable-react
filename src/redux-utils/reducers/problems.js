/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { problemsTypes } from 'redux-utils/types';

const initialState = {
  isFetching: false,
  problems: {
    list: {}
  }
};

const reducer = createReducer(initialState, {
  [problemsTypes.getProblem.request]: state => {
    state.isFetching = true;
    state.problems.list = {};
  },
  [problemsTypes.getProblem.success]: (state, action) => {
    state.isFetching = false;
    state.problems.list = action.payload.response;
  },
  [problemsTypes.getProblem.error]: state => {
    state.isFetching = false;
    state.count.value = 0;
    state.problems.list = {};
  }
});

export default reducer;
