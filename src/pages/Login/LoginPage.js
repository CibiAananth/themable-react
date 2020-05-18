/** @jsx jsx */
import { useState } from 'react';
import PropTypes from 'prop-types';
// core components
import { Container, Box, Flex, css, jsx, Spinner } from 'theme-ui';
import Button from 'ui-components/Button/Button';
import Divider from 'ui-components/Divider/Divider';
import Field from 'ui-components/Input/Field';
import Text from 'ui-components/Text/Text';
import ThemeToggle from 'ui-components/ThemeToggle/ThemeToggle';
// assets
import vector from 'assets/svg/vector.svg';
import logo from 'assets/images/logo.png';

const LoginPage = ({ handleLogin, requestStatus }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = ({ field, value }) => {
    setInputValue(e => ({ ...e, [field]: value }));
  };

  const handleKeyDown = ({ which, keyCode }) => {
    if (which === 13 || keyCode === 13) {
      handleLogin(inputValue);
      return false; // returning false will prevent the event from bubbling up.
    }
    return true;
  };

  return (
    <Container
      name="page-container"
      sx={{ minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden' }}
      p={2}
      bg="background"
    >
      <Flex name="header" sx={{ alignItems: 'center' }}>
        <Box name="logo" p={2}>
          <img css={css({ maxWidth: 30 })} src={logo} alt="company=logo" />
        </Box>
        <Box name="logo-text" p={2}>
          <Text sx={{ fontWeight: 600 }} color="secondary" variant="caps">
            Storage web
          </Text>
        </Box>
        <Box name="theme-toggle" p={2} ml="auto">
          <ThemeToggle />
        </Box>
      </Flex>
      <Flex
        sx={{ alignItems: 'initial', height: '80vh', position: 'relative' }}
      >
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexBasis: '65%'
          }}
        >
          <img css={css({ maxWidth: '60%' })} src={vector} alt="company=logo" />
        </Box>
        <Box sx={{ alignSelf: 'center', flexBasis: '30%' }} p={2}>
          <Text sx={{ fontSize: 14 }} color="muted">
            Welcome Back, Please login to continue
          </Text>
          <Divider />
          <Field
            placeholder="Username"
            name="username"
            type="text"
            defaultValue=""
            onChange={e =>
              handleInputChange({ field: 'username', value: e.target.value })
            }
          />
          <Divider />
          <Field
            placeholder="Password"
            name="password"
            type="password"
            onChange={e =>
              handleInputChange({ field: 'password', value: e.target.value })
            }
            onKeyDown={handleKeyDown}
          />
          <Divider />
          {requestStatus.login.isFetching ? (
            <Spinner color="secondary" size={40} strokeWidth={2} />
          ) : (
            <Button
              w={120}
              sx={{
                bg: 'secondary',
                color: 'buttonText',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
              onClick={() => handleLogin(inputValue)}
            >
              Login
            </Button>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

LoginPage.propTypes = {
  /**
   * @type {object}
   * @description API request status
   */
  requestStatus: PropTypes.object.isRequired,
  /**
   * @type {function}
   * @description Redux Action dispatcher
   */
  handleLogin: PropTypes.func.isRequired
};

export default LoginPage;
