import React from 'react';
import { ThemeProvider as Provider } from 'theme-ui';

import withTheme from 'theme/withTheme';
import theme from 'theme/theme';

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>{children}</Provider>
);

export { theme, withTheme, ThemeProvider };
