import { takeEvery, call, put } from 'redux-saga/effects';
// redux-utils
import { problemsTypes } from 'redux-utils/types/index';
import { actionTypeFormatter } from 'redux-utils/sagas/index';
// api helpers
import { api, endpoints } from 'api/index';

/**
 * @name appWatcherSaga
 * @description Watches for the action dispatched of certain type.
 */
const watcherSaga = [
  takeEvery(problemsTypes.getProblem.request, getWorkerSaga),
  takeEvery(problemsTypes.saveProblem.request, getWorkerSaga)
];

function getWorkerSaga(action) {
  switch (action.type) {
    case problemsTypes.getProblem.request: {
      return apiWorkerSaga(action, {
        endpoint: endpoints.problem,
        method: api.get,
        headers: ['auth']
      });
    }
    case problemsTypes.saveProblem.request: {
      return apiWorkerSaga(action, {
        endpoint: endpoints.problem,
        method: api.post,
        headers: ['auth']
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
