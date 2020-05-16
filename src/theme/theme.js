const theme = {
  initialColorModeName: 'dark',
  colors: {
    'logo-blue': '#2e79bc',
    buttonText: '#fff',
    primary: '#e14eca',
    secondary: '#33ccff',
    muted: '#959aa5',
    modes: {
      dark: {
        text: '#fff',
        background: '#191919',
        gradient: 'linear-gradient(#091236, #1E215D)',
        toggleBorder: '#fff',
        toggle: '#091236',
        light8: 'rgba(255, 255, 255, 0.8)',
        inputBorder: 'rgb(43, 53, 83)'
      },
      light: {
        text: '#000',
        background: '#fff',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
        toggleBorder: '#efd645',
        toggle: '#fafad2',
        light8: 'rgba(0, 0, 0, 0.8)',
        inputBorder: 'rgb(171, 183, 216)'
      }
    }
  },
  text: {
    default: {
      color: 'text',
      fontSize: 3
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  },
  buttons: {
    primary: {
      background: 'primary',
      backgroundSize: '210% 210%',
      backgroundPosition: '100% 0',
      backgroundColor: 'primary',
      fontSize: 13
    }
  },
  radii: {
    '2p': 2,
    '5p': 5,
    '30p': 30,
    '50p': 50
  },
  sizes: {
    '10p': 10
  }
};

export default theme;
