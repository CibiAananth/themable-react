import { createSelector } from '@reduxjs/toolkit';

const getTagsStore = state => state.tagsStore;

const selectTags = createSelector(
  [getTagsStore],
  state => state.tags
);

// eslint-disable-next-line import/prefer-default-export
export { selectTags };
