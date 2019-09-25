/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'theme-ui';

import { theme } from 'theme';

export default WrappedComponent => {
  const WithTheme = props => {
    return (
      <ThemeProvider theme={theme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
  return WithTheme;
};
