/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { datasetsTypes } from 'redux-utils/types';

const initialState = {
  isFetching: false,
  datasets: {
    list: {}
  }
};

const reducer = createReducer(initialState, {
  [datasetsTypes.getDataset.request]: state => {
    state.isFetching = true;
  },
  [datasetsTypes.getDataset.success]: (state, action) => {
    state.isFetching = false;
    state.datasets.list = action.payload.response;
  },
  [datasetsTypes.getDataset.error]: state => {
    state.isFetching = false;
    state.count.value = 0;
    state.datasets.list = {};
  }
});

export default reducer;
