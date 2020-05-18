/** @jsx jsx */
import PropTypes from 'prop-types';
// core components
import { Container, Box, Flex, jsx, css } from 'theme-ui';
import Text from 'ui-components/Text/Text';
import ThemeToggle from 'ui-components/ThemeToggle/ThemeToggle';
import Button from 'ui-components/Button/Button';
// assets
import logo from 'assets/images/logo.png';

const Header = ({ handleLogout }) => {
  return (
    <Container name="header-container" p={2} bg="background">
      <Flex name="header" sx={{ alignItems: 'center' }}>
        <Box name="logo" p={2}>
          <img css={css({ maxWidth: 30 })} src={logo} alt="company=logo" />
        </Box>
        <Box name="logo-text" p={2}>
          <Text sx={{ fontWeight: 600 }} color="primary" variant="caps">
            Storage web
          </Text>
        </Box>
        <Button
          sax={{ color: 'primary' }}
          variant="outlined"
          p={2}
          ml="auto"
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Box name="theme-toggle" p={2}>
          <ThemeToggle />
        </Box>
      </Flex>
    </Container>
  );
};

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired
};

export default Header;
