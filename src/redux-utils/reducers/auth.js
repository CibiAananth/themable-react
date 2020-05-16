/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { authTypes } from 'redux-utils/types/index';

const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  profile: {},
  apiRequestStatus: {
    login: { isFetching: false, error: false },
    logout: { isFetching: false, error: false }
  }
};

const reducer = createReducer(initialState, {
  [authTypes.inValidToken]: state => {
    state.isLoggedIn = false;
    state.isLoggedOut = true;
    state.profile = {};
  },
  [authTypes.userLogin.request]: state => {
    state.isLoggedIn = false;
    state.profile = {};
    state.apiRequestStatus.login = { isFetching: true, error: false };
  },
  [authTypes.userLogin.success]: (state, action) => {
    state.isLoggedIn = true;
    state.apiRequestStatus.login = { isFetching: false, error: false };
    const profile = { ...action.payload.response };
    delete profile.status;
    delete profile.token;
    state.profile = profile;
  },
  [authTypes.userLogin.failure]: state => {
    state.isLoggedIn = false;
    state.apiRequestStatus.login = { isFetching: false, error: true };
    state.profile = {};
  },
  [authTypes.userLogout.request]: state => {
    state.isLoggedOut = false;
    state.profile = {};
    state.apiRequestStatus.logout = { isFetching: true, error: false };
  },
  [authTypes.userLogout.success]: (state, action) => {
    state.isLoggedOut = true;
    state.apiRequestStatus.logout = { isFetching: false, error: false };
    const profile = { ...action.payload.response };
    delete profile.status;
    delete profile.token;
    state.profile = profile;
  },
  [authTypes.userLogout.failure]: state => {
    state.isLoggedOut = false;
    state.apiRequestStatus.logout = { isFetching: false, error: true };
    state.profile = {};
  }
});

export default reducer;
