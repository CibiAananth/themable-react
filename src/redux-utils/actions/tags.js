import { tagsTypes } from 'redux-utils/types';
import { reducerModel } from 'models/index';
import actionCreator from './actionCreator';

const getTagAction = ({ payload, meta = { reducerID: reducerModel.tags } }) =>
  actionCreator({ type: tagsTypes.getTag.request, payload, meta });

// eslint-disable-next-line import/prefer-default-export
export { getTagAction };
