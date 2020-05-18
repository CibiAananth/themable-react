import { all } from 'redux-saga/effects';

import authSaga from 'redux-utils/sagas/auth';
import datasetsSaga from 'redux-utils/sagas/datasets';
import problemsSaga from 'redux-utils/sagas/problems';
import tagsSaga from 'redux-utils/sagas/tags';

export default function* rootSaga() {
  yield all([...authSaga, ...datasetsSaga, ...problemsSaga, ...tagsSaga]);
}

export const actionTypeFormatter = (type, target) =>
  `${type.slice(0, type.indexOf('REQUEST') - 1)}_${target}`;
