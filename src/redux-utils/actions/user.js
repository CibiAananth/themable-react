import { userTypes } from 'redux-utils/types';

import actionCreator from './actionCreator';

const getPhotosAction = ({ payload, meta = { reducerID: 'rx_user' } }) =>
  actionCreator({ type: userTypes.getPhotos.request, payload, meta });

const decrementCountAction = ({ payload, meta = { reducerID: 'rx_user' } }) =>
  actionCreator({ type: userTypes.decrementCount, payload, meta });

export { decrementCountAction, getPhotosAction };
