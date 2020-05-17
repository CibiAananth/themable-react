import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@theme-ui/components';

const getHeightWidth = size => {
  switch (size) {
    case 'sm':
      return { width: 'inherit', height: 40 };
    default:
      return null;
  }
};

const ButtonWrapper = ({ w, h, size, children, bg, sx, ...rest }) => {
  let { width, height } = getHeightWidth(size);
  width = w || width;
  height = h || height;
  return (
    <Button
      sx={{
        height,
        width,
        outline: 'none',
        cursor: 'pointer',
        color: 'buttonText',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

ButtonWrapper.propTypes = {
  bg: PropTypes.string,
  sx: PropTypes.object,
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

ButtonWrapper.defaultProps = {
  bg: 'primary',
  sx: {},
  w: 100,
  h: null,
  size: 'sm'
};

export default ButtonWrapper;
