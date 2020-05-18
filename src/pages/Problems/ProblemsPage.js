import React from 'react';
import PropTypes from 'prop-types';
// ui-components
import { Container, Flex } from 'theme-ui';
import Divider from 'ui-components/Divider/Divider';
import Text from 'ui-components/Text/Text';
// views
import ProblemsList from './ProblemsList';
import ProblemDetails from './ProblemDetails';

const ProblemsPage = ({
  urlParams,
  problems,
  datasets,
  handleCreateProblem,
  handleProblemClick,
  handleDatasetClick
}) => {
  return (
    <Container p={10} sx={{ height: 'inherit' }}>
      {problems.results ? (
        !urlParams.id ? (
          <ProblemsList
            handleCreateProblem={handleCreateProblem}
            results={problems.results}
            handleProblemClick={handleProblemClick}
          />
        ) : (
          <ProblemDetails
            handleDatasetClick={handleDatasetClick}
            datasets={datasets}
            results={problems.results[0]}
          />
        )
      ) : (
        <Flex
          sx={{
            flexFlow: 'column',
            height: 'calc(100% - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            justifySelf: 'center'
          }}
        >
          <Text
            sx={{
              fontSize: 50,
              fontWeight: 'bold'
            }}
          >
            Problem not found.
          </Text>
          <Divider />
          <Text
            sx={{
              fontSize: 15,
              fontWeight: '500',
              color: 'muted'
            }}
          >
            Might be an internal server or please check the problem id in the
            URL
          </Text>
        </Flex>
      )}
    </Container>
  );
};

ProblemsPage.propTypes = {
  urlParams: PropTypes.object,
  problems: PropTypes.object.isRequired,
  datasets: PropTypes.object.isRequired,
  handleCreateProblem: PropTypes.func.isRequired,
  handleProblemClick: PropTypes.func.isRequired,
  handleDatasetClick: PropTypes.func.isRequired
};

ProblemsPage.defaultProps = {
  urlParams: {}
};

export default ProblemsPage;
