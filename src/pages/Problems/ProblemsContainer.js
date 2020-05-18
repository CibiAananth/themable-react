import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// redux-utils
import { connect } from 'react-redux';
import {
  datasetsSelectors,
  problemsSelectors,
  tagsSelectors
} from 'redux-utils/selectors/index';
import {
  datasetsActions,
  problemsActions,
  tagsActions
} from 'redux-utils/actions/index';
// ui-components
import { Flex, Spinner } from 'theme-ui';
import Divider from 'ui-components/Divider/Divider';
import Text from 'ui-components/Text/Text';
// router
import { appRoutes } from 'routes/index';
// views
import CreateProblem from './CreateProblem';
import ProblemsList from './ProblemsList';
import ProblemDetails from './ProblemDetails';

const getRenderPage = match => {
  if (match.path === appRoutes.createProblem.path) {
    return 'createProblem';
  }
  if (match.params.id) {
    return 'problemDetails';
  }
  return 'problemList';
};

const ProblemsContainer = ({
  problems,
  problemsRequestStatus,
  datasets,
  tags,
  history,
  match,
  dispatchGetProblems,
  dispatchSaveProblem,
  dispatchGetDatasets,
  dispatchGetTags
}) => {
  const [renderPage, setRenderPage] = useState(getRenderPage(match));

  useEffect(() => {
    setRenderPage(getRenderPage(match));
  }, [match]);

  useEffect(() => {
    if (renderPage !== 'createProblem') {
      const { params: urlParams } = match;
      if (urlParams.id) {
        dispatchGetProblems({
          payload: {
            params: {
              id: urlParams.id
            }
          }
        });
        dispatchGetDatasets({
          payload: { params: { problem_id: urlParams.id } }
        });
      } else {
        dispatchGetProblems({});
      }
    }
  }, [match, renderPage, dispatchGetProblems, dispatchGetDatasets]);

  const handleCreateProblem = () => {
    history.push('/app/problems/edit/new/');
  };

  const handleProblemClick = problem => {
    history.push(`/app/problems/${problem.id}`);
  };

  const handleDatasetClick = dataset => {
    history.push(`/app/datasets/${dataset.id}`);
  };

  const handleSaveProblem = ({ dataset, tag, description, name }) => {
    const params = {
      description,
      name,
      datasets: JSON.stringify(dataset.map(el => el.id)),
      tags: JSON.stringify(tag.map(el => el.id))
    };
    dispatchSaveProblem({
      payload: { params }
    });
  };

  return problemsRequestStatus ? (
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
      <Spinner color="secondary" size={40} strokeWidth={2} />
    </Flex>
  ) : (
    <>
      {renderPage === 'createProblem' ? (
        <CreateProblem
          history={history}
          datasets={datasets.list}
          tags={tags.list}
          getDatasets={dispatchGetDatasets}
          getTags={dispatchGetTags}
          saveProblem={handleSaveProblem}
        />
      ) : (
        <>
          {problems.list.results ? (
            !match.params.id ? (
              <ProblemsList
                handleCreateProblem={handleCreateProblem}
                results={problems.list.results}
                handleProblemClick={handleProblemClick}
              />
            ) : (
              <ProblemDetails
                handleDatasetClick={handleDatasetClick}
                datasets={datasets.list}
                results={problems.list.results[0]}
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
                Might be an internal server or please check the problem id in
                the URL
              </Text>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

ProblemsContainer.propTypes = {
  problems: PropTypes.object.isRequired,
  problemsRequestStatus: PropTypes.bool.isRequired,
  datasets: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  dispatchGetProblems: PropTypes.func.isRequired,
  dispatchSaveProblem: PropTypes.func.isRequired,
  dispatchGetDatasets: PropTypes.func.isRequired,
  dispatchGetTags: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  problems: problemsSelectors.selectProblems(state),
  problemsRequestStatus: problemsSelectors.selectProblemsRequestStatus(state),
  datasets: datasetsSelectors.selectDatasets(state),
  tags: tagsSelectors.selectTags(state)
});

const mapDispatchToProps = {
  dispatchGetProblems: problemsActions.getProblemAction,
  dispatchSaveProblem: problemsActions.saveProblemAction,
  dispatchGetDatasets: datasetsActions.getDatasetAction,
  dispatchGetTags: tagsActions.getTagAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProblemsContainer);
