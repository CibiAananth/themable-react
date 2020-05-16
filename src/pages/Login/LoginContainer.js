import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// redux library for react
import { connect } from 'react-redux';
// redux utils
import { authSelectors } from 'redux-utils/selectors/index';
import { authActions } from 'redux-utils/actions/index';
// core functions
import ls from 'lib/core/storageFactory';
// core components
import Alert from 'ui-components/Alert/Alert';
// views
import LoginPage from 'pages/Login/LoginPage';

const LoginContainer = ({
  authState,
  history,
  requestStatus,
  dispatchUserLogin
}) => {
  const [isAlertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const redirectLogin = () => {
      history.replace('/app');
    };
    if (ls.get('isLoggedIn') || authState.isLoggedIn) {
      redirectLogin();
    }
  }, [history, authState.isLoggedIn]);

  useEffect(() => {
    if (requestStatus.login.error && !requestStatus.login.isFetching) {
      setAlertOpen(true);
    }
  }, [requestStatus.login]);

  const handleLogin = cred => {
    dispatchUserLogin({
      payload: {
        params: {
          ...cred
        }
      }
    });
  };

  return (
    <>
      {isAlertOpen && (
        <Alert
          variant="secondary"
          mb={2}
          useClose
          onClose={() => setAlertOpen(false)}
        >
          Invalid username or password
        </Alert>
      )}
      <LoginPage requestStatus={requestStatus} handleLogin={handleLogin} />
    </>
  );
};

// component props
LoginContainer.propTypes = {
  authState: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  requestStatus: PropTypes.object.isRequired,
  dispatchUserLogin: PropTypes.func.isRequired
};

/*
  Connect redux store state to props so that you can access the state
  from the scope of the component's props
*/
const mapStateToProps = state => ({
  authState: authSelectors.selectAuthStatus(state),
  requestStatus: authSelectors.selectApiStatus(state)
});

/*
  Connect dispatch methods to props so that you can call the methods
  from the scope of the component's props
*/
const mapDispatchToProps = {
  dispatchUserLogin: authActions.userLoginAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
