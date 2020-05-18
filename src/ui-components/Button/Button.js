import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonComponent } from '@theme-ui/components';

const getHeightWidth = size => {
  switch (size) {
    case 'sm':
      return { width: 'inherit', height: 40 };
    default:
      return null;
  }
};

const Button = ({ w, h, size, children, sax, variant, ...rest }) => {
  const { color } = sax;
  let { width, height } = getHeightWidth(size);
  width = w || width;
  height = h || height;
  return (
    <ButtonComponent
      variant={variant}
      sx={{
        height,
        width,
        outline: 'none',
        cursor: 'pointer',
        color: 'buttonText',
        ...(variant === 'outlined' && {
          '&:hover': {
            backgroundColor: color,
            color: '#fff',
            borderColor: color
          }
        }),
        ...sax
      }}
      {...rest}
    >
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  sax: PropTypes.object,
  variant: PropTypes.string,
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

Button.defaultProps = {
  sax: {},
  w: 'max-content',
  h: null,
  size: 'sm',
  variant: ''
};

export default Button;
