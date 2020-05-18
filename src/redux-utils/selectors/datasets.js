import { createSelector } from '@reduxjs/toolkit';

const getDatasetsStore = state => state.datasetsStore;

const selectDatasets = createSelector(
  [getDatasetsStore],
  state => state.datasets
);

// eslint-disable-next-line import/prefer-default-export
export { selectDatasets };
