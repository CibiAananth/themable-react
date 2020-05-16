import { call, put, takeLatest } from 'redux-saga/effects';
import { userTypes } from 'redux-utils/types/index';

import { get } from 'api/utils';

const watcherSaga = [takeLatest(userTypes.getPhotos.request, getPhotosWorker)];

function* getPhotosWorker(action) {
  try {
    const { response, params, error } = yield call(get, {
      apiURL: process.env.REACT_APP_DEMO_API_GET_PHOTOS,
      payload: action.payload.params
    });
    if (response) {
      yield put({
        type: userTypes.getPhotos.success,
        payload: { response, request: params }
      });
      return;
    }
    yield put({
      type: userTypes.getPhotos.error,
      payload: { request: params, error: error.data }
    });
  } catch (err) {
    throw new Error(err);
  }
}

export default watcherSaga;
