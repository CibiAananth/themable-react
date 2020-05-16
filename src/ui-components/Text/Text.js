import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'theme-ui';

/**
 * @class
 * @hideconstructor
 * @description Core Typography component
 */
const Typo = ({ sx, children, ...rest }) => {
  return (
    <>
      <Text sx={sx} {...rest}>
        {children}
      </Text>
    </>
  );
};

Typo.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.any.isRequired
};

Typo.defaultProps = {
  sx: {}
};

export default Typo;
