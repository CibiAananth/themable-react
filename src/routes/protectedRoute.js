/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// core functions
import ls from 'lib/core/storageFactory';

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      ls.get('isLoggedIn') === true ? (
        render ? (
          render(rest)
        ) : (
          <Component {...props} />
        )
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
