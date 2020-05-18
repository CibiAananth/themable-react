import { createSelector } from '@reduxjs/toolkit';

const getProblemsStore = state => state.problemsStore;

const selectProblems = createSelector(
  [getProblemsStore],
  state => state.problems
);

const selectProblemsRequestStatus = createSelector(
  [getProblemsStore],
  state => state.isFetching
);

// eslint-disable-next-line import/prefer-default-export
export { selectProblems, selectProblemsRequestStatus };
