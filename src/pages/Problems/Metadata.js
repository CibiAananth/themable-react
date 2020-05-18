import React from 'react';
import PropTypes from 'prop-types';
// ui-components
import { Flex } from 'theme-ui';
import IconButton from 'ui-components/IconButton/IconButton';
import Text from 'ui-components/Text/Text';

const Metadata = ({ value, title, icon: Icon, ...rest }) => (
  <Flex
    {...rest}
    pt={10}
    pr={10}
    sx={{
      alignItems: 'center'
    }}
  >
    <IconButton>
      <Icon />
    </IconButton>
    {value && (
      <>
        {title && (
          <Text color="muted" sx={{ fontSize: 14, fontWeight: '500' }}>
            {title}
          </Text>
        )}
        <Text color="muted" sx={{ fontSize: 14, fontWeight: '500' }}>
          {value}
        </Text>
      </>
    )}
  </Flex>
);

Metadata.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  title: PropTypes.string,
  icon: PropTypes.any.isRequired
};

Metadata.defaultProps = {
  title: undefined,
  value: 'null'
};

export default Metadata;
