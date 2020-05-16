import { authTypes } from 'redux-utils/types/index';
import reducerModel from 'models/reducerModel';

import actionCreator from './actionCreator';

const userLoginAction = ({
  payload,
  meta = { reducerID: reducerModel.auth }
}) => actionCreator({ type: authTypes.userLogin.request, payload, meta });

const userLogoutAction = ({
  payload,
  meta = { reducerID: reducerModel.auth }
}) => actionCreator({ type: authTypes.userLogout.request, payload, meta });

export { userLoginAction, userLogoutAction };
