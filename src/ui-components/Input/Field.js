import React from 'react';
import PropTypes from 'prop-types';
import { Field as FieldComponent } from 'theme-ui';

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
const Field = ({ sx, ...rest }) => {
  return (
    <>
      <FieldComponent sx={{ ...defaultStyles, sx }} {...rest} />
    </>
  );
};

Field.propTypes = {
  sx: PropTypes.object
};

Field.defaultProps = {
  sx: {}
};

export default Field;
