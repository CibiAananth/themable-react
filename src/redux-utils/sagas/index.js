import { all } from 'redux-saga/effects';

import userSaga from 'redux-utils/sagas/user';
import authSaga from 'redux-utils/sagas/auth';

export default function* rootSaga() {
  yield all([...authSaga, ...userSaga]);
}

export const actionTypeFormatter = (type, target) =>
  `${type.slice(0, type.indexOf('REQUEST') - 1)}_${target}`;
