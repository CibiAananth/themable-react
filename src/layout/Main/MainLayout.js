/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, Box } from 'theme-ui';
import { map } from 'lodash';
// redux-utils
import { connect } from 'react-redux';
import { authSelectors } from 'redux-utils/selectors/index';
import { authActions } from 'redux-utils/actions/index';
// routes
import { SwitchRoutes, appRoutes } from 'routes/index';
// views
import Header from 'layout/Header/Header';
import Sidebar from 'layout/Sidebar/Sidebar';

const MainLayout = ({ authState, dispatchLogoutRequest, ...rest }) => {
  console.log('authState', authState);
  return (
    <div>
      <Header handleLogout={dispatchLogoutRequest} />
      <Box
        sx={{
          p: 10,
          display: 'grid',
          height: 'calc(100vh - 78px)',
          overflow: 'hidden',
          gridTemplateAreas: '"nav main"',
          gridTemplateColumns: '200px 1fr',
          gridTemplateRows: '1fr',
          gridGap: 10
        }}
      >
        <nav>
          <Sidebar {...rest} routes={map(appRoutes, el => el)} />
        </nav>
        <main>
          <SwitchRoutes routes={map(appRoutes, el => el)} />
        </main>
      </Box>
    </div>
  );
};

MainLayout.propTypes = {
  authState: PropTypes.object.isRequired,
  dispatchLogoutRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authState: authSelectors.selectAuthStatus(state)
});

const mapDispatchToProps = {
  dispatchLogoutRequest: authActions.userLogoutAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
