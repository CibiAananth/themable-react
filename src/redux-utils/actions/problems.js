import { problemsTypes } from 'redux-utils/types';
import { reducerModel } from 'models/index';
import actionCreator from './actionCreator';

const getProblemAction = ({
  payload,
  meta = { reducerID: reducerModel.problems }
}) => actionCreator({ type: problemsTypes.getProblem.request, payload, meta });

const saveProblemAction = ({
  payload,
  meta = { reducerID: reducerModel.problems }
}) => actionCreator({ type: problemsTypes.saveProblem.request, payload, meta });

// eslint-disable-next-line import/prefer-default-export
export { getProblemAction, saveProblemAction };
