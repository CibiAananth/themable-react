import React from 'react';
// theme
import { withTheme } from 'theme/index';
// routers
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import PrivateRoute from 'routes/index';
// error monitoring
import ErrorBoundary from 'utils/ErrorBoundary';

// views
import LoginContainer from 'pages/Login/LoginContainer';
import MainContainer from 'pages/Main/MainContainer';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <PrivateRoute path="/app" component={MainContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Redirect from="/" to="/app" />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default withTheme(App);
