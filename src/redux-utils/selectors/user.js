import { createSelector } from '@reduxjs/toolkit';

const getUserState = state => state.userState;

const selectPhotos = createSelector(
  [getUserState],
  state => state.photos
);

const selectCount = createSelector(
  [getUserState],
  state => state.count
);

export { selectCount, selectPhotos };
