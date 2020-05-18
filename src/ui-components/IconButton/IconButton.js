import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as IconButtonComponent } from 'theme-ui';

/**
 * @class
 * @hideconstructor
 * @description Core IconButton component
 */
const IconButton = ({
  sx,
  fill,
  outline,
  round,
  button,
  children,
  ...rest
}) => {
  return (
    <>
      <IconButtonComponent
        sx={{
          outline: 'none',
          ...(button && { cursor: 'pointer' }),
          ...(outline && { border: '1px solid' }),
          ...(round && { borderRadius: '50%' }),
          svg: {
            fill,
            g: {
              fill
            }
          },
          ...sx
        }}
        {...rest}
      >
        {children}
      </IconButtonComponent>
    </>
  );
};

IconButton.propTypes = {
  sx: PropTypes.object,
  fill: PropTypes.string,
  button: PropTypes.bool,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  children: PropTypes.any.isRequired
};

IconButton.defaultProps = {
  sx: {},
  fill: 'muted',
  button: false,
  outline: false,
  round: false
};

export default IconButton;
