import { takeEvery, call, put } from 'redux-saga/effects';
// redux-utils
import { authTypes } from 'redux-utils/types/index';
import { actionTypeFormatter } from 'redux-utils/sagas/index';
// api helpers
import { api, endpoints } from 'api/index';
import ls from 'lib/core/storageFactory';

/**
 * @name appWatcherSaga
 * @description Watches for the action dispatched of certain type.
 */
const watcherSaga = [
  takeEvery(authTypes.userLogin.request, getWorkerSaga),
  takeEvery(authTypes.userLogout.request, getWorkerSaga)
];

function getWorkerSaga(action) {
  switch (action.type) {
    case authTypes.userLogin.request: {
      return apiWorkerSaga(action, {
        endpoint: endpoints.userLogin,
        method: api.post
      });
    }
    case authTypes.userLogout.request: {
      return apiWorkerSaga(action, {
        endpoint: endpoints.userLogout,
        headers: ['auth'],
        method: api.get
      });
    }
    default:
      return null;
  }
}

/**
 * @description Get layout worker saga
 * @param {object} action - dispatched action
 * @param {object} params - api params
 * @returns {undefined}
 * @yields put - get layout success/error action.
 */
function* apiWorkerSaga(action, params) {
  try {
    const { response, error, request } = yield call(params.method, {
      payload: action.payload.params,
      ...params
    });
    if (response) {
      if (action.type === authTypes.userLogin.request) {
        ls.set('userToken', response.token);
        ls.set('isLoggedIn', true);
      }
      if (action.type === authTypes.userLogout.request) {
        ls.clear();
      }
      yield put({
        meta: action.meta,
        type: actionTypeFormatter(action.type, 'SUCCESS'),
        payload: {
          ...action.payload,
          error: null,
          request,
          response
        }
      });
    } else {
      yield put({
        meta: action.meta,
        type: actionTypeFormatter(action.type, 'FAILURE'),
        payload: {
          ...action.payload,
          error: error.data,
          request,
          response: null
        }
      });
    }
  } catch (error) {
    yield put({
      meta: action.meta,
      type: 'SAGA_ERROR',
      payload: {
        type: action.type,
        ...action.payload,
        error
      }
    });
  }
}

export default watcherSaga;
