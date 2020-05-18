import { datasetsTypes } from 'redux-utils/types';
import { reducerModel } from 'models/index';
import actionCreator from './actionCreator';

const getDatasetAction = ({
  payload,
  meta = { reducerID: reducerModel.datasets }
}) => actionCreator({ type: datasetsTypes.getDataset.request, payload, meta });

// eslint-disable-next-line import/prefer-default-export
export { getDatasetAction };
