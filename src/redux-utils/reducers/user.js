/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { userTypes } from 'redux-utils/types';

const initialState = {
  isFetching: false,
  photos: {
    count: { value: 0 },
    list: []
  }
};

const reducer = createReducer(initialState, {
  [userTypes.decrementCount]: state => {
    state.photos.count = { value: state.photos.count.value - 1 };
  },
  [userTypes.getPhotos.request]: state => {
    state.isFetching = true;
  },
  [userTypes.getPhotos.success]: (state, action) => {
    state.isFetching = false;
    state.photos.count.value = action.payload.response.count;
    state.photos.list = action.payload.response.results;
  },
  [userTypes.getPhotos.error]: state => {
    state.isFetching = false;
    state.count.value = 0;
    state.photos = [];
  }
});

export default reducer;
