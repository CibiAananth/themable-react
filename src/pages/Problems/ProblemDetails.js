/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
// Icon
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { GoMarkGithub, GoGitBranch } from 'react-icons/go';
// UI components
import { jsx, Badge, Box, Container, Flex } from 'theme-ui';
import Divider from 'ui-components/Divider/Divider';
import IconButton from 'ui-components/IconButton/IconButton';
import Metadata from 'pages/Problems/Metadata';
import Text from 'ui-components/Text/Text';
// assets
import { ReactComponent as TagSVG } from 'assets/svg/tag.svg';
import { ReactComponent as TicketSVG } from 'assets/svg/ticket.svg';

const Description = ({ html, ...rest }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <Box
        sx={{
          maxHeight: isExpanded ? 'initial' : '20rem',
          overflow: 'hidden',
          ...rest
        }}
      >
        {ReactHtmlParser(html)}
      </Box>
      <Flex
        p="5px"
        sx={{
          cursor: 'pointer',
          justifyContent: 'center',
          border: '1px solid',
          borderColor: 'inputBorder',
          '&:hover': {
            bg: 'subtle'
          }
        }}
        onClick={() => setExpanded(prev => !prev)}
      >
        <IconButton button fill="muted">
          {isExpanded ? (
            <MdKeyboardArrowUp size={18} />
          ) : (
            <MdKeyboardArrowDown size={18} />
          )}
        </IconButton>
      </Flex>
    </>
  );
};

Description.propTypes = {
  html: PropTypes.string.isRequired
};

const ProblemDetails = ({ results, datasets, handleDatasetClick }) => {
  return (
    <div>
      <>
        <Text
          sx={{ fontWeight: '500', textTransform: 'capitalize', fontSize: 25 }}
        >
          {results.name}
        </Text>
        <Divider />
        <Flex sx={{ alignItems: 'center' }}>
          <IconButton>
            <TagSVG />
          </IconButton>
          {results.tags.map(tag => (
            <Badge
              py="5px"
              px="15px"
              mx="2px"
              sx={{ borderRadius: 50 }}
              key={tag.id}
              bg="secondary"
            >
              {tag.name}
            </Badge>
          ))}
        </Flex>
        <Divider />
        <Container
          name="description-block"
          w={300}
          sx={{ border: '1px solid', borderColor: 'inputBorder' }}
        >
          <Flex
            sx={{
              flexFlow: 'column'
            }}
          >
            <Box bg="subtle" py={15} px={20}>
              <Text color="light4" sx={{ fontWeight: '500', fontSize: 14 }}>
                Description
              </Text>
            </Box>
            <Description py={15} px={20} html={results.description} />
          </Flex>
        </Container>
        <Divider />
        <Container
          name="datasets-block"
          w={300}
          sx={{ border: '1px solid', borderColor: 'inputBorder' }}
        >
          <Flex
            sx={{
              flexFlow: 'column'
            }}
          >
            <Box bg="subtle" py={15} px={20}>
              <Text color="light4" sx={{ fontWeight: '500', fontSize: 14 }}>
                Datasets
              </Text>
            </Box>
            {datasets.results && (
              <Flex py={15} px={20} sx={{ flexFlow: 'column' }}>
                {datasets.results.map(dataset => {
                  return (
                    <Box
                      key={dataset.id}
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
                      onClick={() => handleDatasetClick(dataset)}
                    >
                      <Text
                        sx={{
                          color: 'light8',
                          fontSize: 15,
                          textTransform: 'capitalize',
                          fontWeight: '600'
                        }}
                      >
                        {dataset.name}
                      </Text>
                      <Flex>
                        <Metadata
                          value={dataset.id}
                          title="id - "
                          icon={TicketSVG}
                        />
                        <Metadata
                          value={dataset.tags.map(el => `${el.name},`)}
                          title="tags - "
                          icon={TagSVG}
                        />
                        <Metadata
                          value={dataset.repo || 'null'}
                          icon={GoGitBranch}
                        />
                        <Metadata
                          onClick={e => {
                            e.stopPropagation();
                            window.open(dataset.url, '_blank');
                          }}
                          value={dataset.url}
                          icon={GoMarkGithub}
                        />
                      </Flex>
                    </Box>
                  );
                })}
              </Flex>
            )}
          </Flex>
        </Container>
      </>
    </div>
  );
};

ProblemDetails.propTypes = {
  results: PropTypes.object.isRequired,
  datasets: PropTypes.object.isRequired,
  handleDatasetClick: PropTypes.func.isRequired
};

export default ProblemDetails;
