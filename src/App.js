import React from 'react';
import { ColorMode, useColorMode } from 'theme-ui';
import { Box } from 'rebass';

import ErrorBoundary from 'utils/ErrorBoundary';
import { withTheme } from 'theme';

import Button from 'ui-components/Button/Button';

function App() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <ErrorBoundary>
      <ColorMode />
      <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} bg="primary" color="text">
        Box
      </Box>
      <Button
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      >
        Toggle
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </ErrorBoundary>
  );
}

export default withTheme(App, { initialColorMode: 'dark' });
