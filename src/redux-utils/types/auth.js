const types = {
  userLogin: {
    request: 'USER_LOGIN_REQUEST',
    success: 'USER_LOGIN_SUCCESS',
    failure: 'USER_LOGIN_FAILURE'
  },
  userLogout: {
    request: 'USER_LOGOUT_REQUEST',
    success: 'USER_LOGOUT_SUCCESS',
    failure: 'USER_LOGOUT_FAILURE'
  },
  inValidToken: 'INVALID_USER_TOKEN'
};

export default types;
