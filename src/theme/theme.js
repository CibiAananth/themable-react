const theme = {
  initialColorMode: 'dark',
  colors: {
    text: '#000',
    primary: 'red',
    modes: {
      dark: {
        text: '#fff',
        primary: 'black'
      },
      papaya: {
        // this color mode will fallback to the root color object
        // for values not defined here
        text: '#000',
        primary: 'blue'
      }
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  }
};

export default theme;
