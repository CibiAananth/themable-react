import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputComponent } from 'theme-ui';

const defaultStyles = {
  color: 'text',
  border: '1px solid',
  borderColor: 'inputBorder',
  outline: 'none',
  padding: '10px 15px',
  fontSize: 14
};

/**
 * @class
 * @hideconstructor
 * @description Core Typography component
 */
const Input = ({ sx, ...rest }) => {
  return (
    <>
      <InputComponent sx={{ ...defaultStyles, sx }} {...rest} />
    </>
  );
};

Input.propTypes = {
  sx: PropTypes.object
};

Input.defaultProps = {
  sx: {}
};

export default Input;
