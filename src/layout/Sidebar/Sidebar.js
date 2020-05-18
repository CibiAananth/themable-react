import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from 'theme-ui';

const checkActiveRoute = (path, routeName) => path.indexOf(routeName) > -1;

const Sidebar = ({ routes, history }) => {
  const { location } = window;

  const handleItemClick = route => {
    history.push(route.path);
  };

  return (
    <Flex p={13} sx={{ flexFlow: 'column', alignItems: 'flex-start' }}>
      {routes.map(route => {
        const activeRoute = checkActiveRoute(location.pathname, route.path);
        return (
          route.showInSideBar && (
            <Flex
              as="nav"
              key={route.path}
              p="8px"
              sx={{
                justifyContent: 'start',
                alignItems: 'center',
                cursor: 'pointer',
                margin: '5px 0',
                height: 40,
                backgroundColor: activeRoute ? 'highlight' : 'none',
                color: activeRoute ? 'navText' : 'text',
                width: '100%',
                textAlign: 'center',
                fontWeight: '800',
                fontSize: 14
              }}
              onClick={() => handleItemClick(route)}
            >
              {route.sidebarName}
            </Flex>
          )
        );
      })}
    </Flex>
  );
};

Sidebar.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default Sidebar;
