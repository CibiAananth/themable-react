import React from 'react';
import PropTypes from 'prop-types';
// ui-components
import { Box, Flex } from 'theme-ui';
import Button from 'ui-components/Button/Button';
import Divider from 'ui-components/Divider/Divider';
import Metadata from 'pages/Problems/Metadata';
import Text from 'ui-components/Text/Text';
// assets
import { ReactComponent as CalendarSVG } from 'assets/svg/calendar.svg';
import { ReactComponent as NewEvent } from 'assets/svg/new_event.svg';
import { ReactComponent as TagSVG } from 'assets/svg/tag.svg';
import { ReactComponent as TicketSVG } from 'assets/svg/ticket.svg';

const ProblemsList = ({ results, handleCreateProblem, handleProblemClick }) => {
  return (
    <>
      <Flex>
        <Text
          sx={{
            fontSize: 35,
            textTransform: 'capitalize',
            fontWeight: 'bold'
          }}
        >
          Problems
        </Text>
        <Button
          ml="auto"
          mr="6px"
          w={150}
          bg="secondary"
          sax={{ fontWeight: '500', fontSize: 15 }}
          onClick={handleCreateProblem}
        >
          New problem
        </Button>
      </Flex>
      <Divider />
      <Divider />
      {results.map(problem => (
        <Box
          key={problem.id}
          sx={{
            cursor: 'pointer',
            height: 100,
            padding: 20,
            width: '100%',
            border: '1px solid',
            borderColor: 'inputBorder',
            '&:hover': {
              backgroundColor: 'highlight'
            }
          }}
          onClick={() => handleProblemClick(problem)}
        >
          <Text
            sx={{
              color: 'light8',
              fontSize: 15,
              textTransform: 'capitalize',
              fontWeight: '600'
            }}
          >
            {problem.name}
          </Text>
          <Flex>
            <Metadata
              value={new Date(problem.created_on).toDateString()}
              title="created_on - "
              icon={NewEvent}
            />
            <Metadata
              value={new Date(problem.modified_on).toDateString()}
              title="modified_on - "
              icon={CalendarSVG}
            />
            <Metadata value={problem.id} title="id - " icon={TicketSVG} />
            <Metadata
              value={problem.tags.map(el => `${el.name},`)}
              title="tags - "
              icon={TagSVG}
            />
          </Flex>
        </Box>
      ))}
    </>
  );
};

ProblemsList.propTypes = {
  results: PropTypes.array,
  handleCreateProblem: PropTypes.func.isRequired,
  handleProblemClick: PropTypes.func.isRequired
};

ProblemsList.defaultProps = {
  results: []
};

export default ProblemsList;
