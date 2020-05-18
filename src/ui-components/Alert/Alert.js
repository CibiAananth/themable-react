import React from 'react';
import PropTypes from 'prop-types';
import { Alert as AlertComponent, Close } from 'theme-ui';

/**
 * @class
 * @hideconstructor
 * @description Core Alert component
 */
const Alert = ({ sax, children, useClose, onClose, ...rest }) => {
  return (
    <>
      <AlertComponent sx={sax} {...rest}>
        {children}
        {useClose && <Close onClick={onClose} ml="auto" mr={-2} />}
      </AlertComponent>
    </>
  );
};

Alert.propTypes = {
  sax: PropTypes.object,
  onClose: PropTypes.func,
  children: PropTypes.any.isRequired,
  useClose: PropTypes.bool
};

Alert.defaultProps = {
  sax: {},
  onClose: () => {},
  useClose: true
};

export default Alert;
