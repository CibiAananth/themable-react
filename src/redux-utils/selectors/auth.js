import { createSelector } from '@reduxjs/toolkit';

const getAuthStore = state => state.authStore;

const selectApiStatus = createSelector(
  [getAuthStore],
  state => state.apiRequestStatus
);

const selectAuthStatus = createSelector(
  [getAuthStore],
  state => ({
    profile: state.profile,
    isLoggedOut: state.isLoggedOut,
    isLoggedIn: state.isLoggedIn
  })
);

export { selectApiStatus, selectAuthStatus };
