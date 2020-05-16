import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@theme-ui/components';
import { css, useColorMode } from 'theme-ui';
// assets
import moon from 'assets/svg/moon.svg';
import sun from 'assets/svg/sun.svg';

const Toggle = props => {
  const { lightTheme } = props;
  return (
    <>
      <Button
        {...props}
        css={css({
          bg: 'transparent',
          padding: '0.5rem',
          overflow: 'hidden',
          cursor: 'pointer',
          outline: 'none',
          '& > img': {
            maxWidth: '1.5rem',
            height: 'auto',
            transition: 'all 0.3s linear',
            '&:nth-of-type(1)': {
              transform: `${lightTheme ? 'translateX(0)' : 'translateX(100px)'}`
            },
            '&:nth-of-type(2)': {
              transform: `${
                lightTheme ? 'translateX(-100px)' : 'translateX(0)'
              }`
            }
          }
        })}
      />
    </>
  );
};

Toggle.propTypes = {
  lightTheme: PropTypes.bool.isRequired
};

const ThemeToggle = () => {
  const [colorMode, setMode] = useColorMode();

  const useLight = colorMode === 'light';

  return (
    <Toggle
      lightTheme={useLight}
      onClick={() => setMode(colorMode === 'light' ? 'dark' : 'light')}
    >
      <img src={sun} alt="Sun free icon" title="Sun free icon" />
      <img src={moon} alt="Moon free icon" title="Moon free icon" />
    </Toggle>
  );
};

ThemeToggle.propTypes = {};

export default ThemeToggle;
