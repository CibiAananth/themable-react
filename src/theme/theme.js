const theme = {
  initialColorModeName: 'dark',
  colors: {
    // 'logo-blue': '#2e79bc',
    muted: '#959aa5',
    danger: '#f36',
    modes: {
      dark: {
        primary: '#33ccff',
        secondary: '#ee00ff',
        buttonText: '#000',
        text: '#fff',
        background: '#191919',
        gradient: 'linear-gradient(#091236, #1E215D)',
        toggleBorder: '#fff',
        toggle: '#091236',
        light8: 'rgba(255, 255, 255, 0.8)',
        light4: 'rgba(255, 255, 255, 0.4)',
        subtle: '#252525',
        inputBorder: 'rgb(43, 53, 83)',
        highlight: '#29112c',
        navText: '#33ccff'
      },
      light: {
        primary: '#30c',
        secondary: '#6100cc',
        // muted: '#f6f6f6',
        buttonText: '#fff',
        text: '#000',
        background: '#fff',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
        toggleBorder: '#efd645',
        toggle: '#fafad2',
        light8: 'rgba(0, 0, 0, 0.8)',
        light4: 'rgba(0, 0, 0, 0.4)',
        subtle: '#fbfbfb',
        inputBorder: 'rgb(235, 236, 236)',
        highlight: '#efeffe',
        navText: '#3333ee'
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
      letterSpacing: '1px'
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
    },
    outlined: {
      fontSize: 13,
      textTransform: 'uppercase',
      border: '3px solid',
      fontWeight: 700,
      borderRadius: 0,
      backgroundColor: 'transparent'
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
  },
  links: {
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      fontWeight: '700',
      color: 'text',
      textDecoration: 'none',
      bg: 'inherit',
      fontSize: 14
    }
  }
};

export default theme;
