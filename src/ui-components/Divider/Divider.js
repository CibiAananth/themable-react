import React from 'react';
import PropTypes from 'prop-types';
import { Divider as DividerComponent } from 'theme-ui';

/**
 * @class
 * @hideconstructor
 * @description Core Typography component
 */
const Divider = ({ sx, border, ...rest }) => {
  return (
    <>
      <DividerComponent
        sx={{ ...sx, ...(!border && { borderBottom: 0 }) }}
        {...rest}
      />
    </>
  );
};

Divider.propTypes = {
  sx: PropTypes.object,
  border: PropTypes.bool
};

Divider.defaultProps = {
  border: false,
  sx: {}
};

export default Divider;
