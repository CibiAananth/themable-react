/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { tagsTypes } from 'redux-utils/types';

const initialState = {
  isFetching: false,
  tags: {
    list: {}
  }
};

const reducer = createReducer(initialState, {
  [tagsTypes.getTag.request]: state => {
    state.isFetching = true;
  },
  [tagsTypes.getTag.success]: (state, action) => {
    state.isFetching = false;
    state.tags.list = action.payload.response;
  },
  [tagsTypes.getTag.error]: state => {
    state.isFetching = false;
    state.count.value = 0;
    state.tags.list = {};
  }
});

export default reducer;
