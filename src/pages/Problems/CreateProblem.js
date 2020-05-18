/** @jsx jsx */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState } from 'react';
import produce from 'immer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
// Icon
import { MdModeEdit } from 'react-icons/md';
// UI components
import { jsx, css, Flex } from 'theme-ui';
import Alert from 'ui-components/Alert/Alert';
import Button from 'ui-components/Button/Button';
import Divider from 'ui-components/Divider/Divider';
import DraftEditor from 'ui-components/RichEditor/DraftEditor';
import IconButton from 'ui-components/IconButton/IconButton';
import Input from 'ui-components/Input/Input';
import Select from 'react-dropdown-select';
import Text from 'ui-components/Text/Text';

const initialState = {
  getContentFromEditor: false,
  isDone: true,
  html: ``
};

// eslint-disable-next-line consistent-return
const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'GET_CONTENT_FROM_EDITOR':
      draft.getContentFromEditor = true;
      draft.isDone = false;
      break;
    case 'EDIT_DESCRIPTION':
      draft.isDone = false;
      break;
    case 'CLOSE_EDITOR':
      draft.isDone = true;
      break;
    case 'POST_CONTENT_FROM_EDITOR':
      draft.getContentFromEditor = false;
      draft.isDone = true;
      draft.html = action.payload.html;
      break;
    default:
      return draft;
  }
});

const Description = ({ html }) => {
  return <div sx={{ color: 'light8' }}>{ReactHtmlParser(html)}</div>;
};

Description.propTypes = {
  html: PropTypes.string.isRequired
};

const CreateProblem = ({
  getDatasets,
  getTags,
  saveProblem,
  datasets,
  tags,
  history
}) => {
  const [editorState, dispatch] = useReducer(reducer, initialState);
  const [selectState, setSelectState] = useState({
    dataset: [],
    tag: []
  });
  const [name, setName] = useState('');
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    getDatasets({});
    getTags({});
  }, [getDatasets, getTags]);

  const handleEditDescription = () => {
    dispatch({ type: 'EDIT_DESCRIPTION' });
  };

  const handleSaveDescription = () => {
    dispatch({ type: 'GET_CONTENT_FROM_EDITOR' });
  };

  const handleClose = ({ type }) => {
    const actions = {
      back: () => history.goBack(),
      close: () => dispatch({ type: 'CLOSE_EDITOR' })
    };
    actions[type]();
  };

  const handleSaveProblem = () => {
    if (name) {
      saveProblem({ description: editorState.html, name, ...selectState });
    } else {
      setFormError(true);
    }
  };

  const handleSelectChange = ({ source, val }) => {
    setSelectState(prev => ({
      ...prev,
      [source]: val
    }));
  };

  const handleInputChange = ({ value }) => {
    setName(value.trim());
  };

  return (
    <>
      {formError && (
        <>
          <Alert
            sax={{ bg: 'danger' }}
            mb={2}
            useClose
            onClose={() => setFormError(false)}
          >
            Forgetting something?
            <span role="img" aria-label="tip">
              🤔
            </span>
            Add a name
          </Alert>
          <Divider />
        </>
      )}
      {editorState.isDone ? (
        <>
          <Text sx={{ fontWeight: '500', fontSize: 20 }}>Add Name</Text>
          <Divider />
          <Input
            value={name}
            placeholder="Problem name"
            name="name"
            id="name"
            onChange={e =>
              handleInputChange({ field: 'name', value: e.target.value })
            }
          />
          <Divider />
          <Flex w={300} sx={{ alignItems: 'center' }}>
            <Text sx={{ fontWeight: '500', fontSize: 20 }}>Description</Text>
            <IconButton
              onClick={handleEditDescription}
              ml={10}
              outline
              round
              button
            >
              <MdModeEdit size={18} />
            </IconButton>
          </Flex>
          <Description html={editorState.html} />
          <Divider />
          <Text sx={{ fontWeight: '500', fontSize: 20 }}>Add Datasets</Text>
          <Divider />
          <Select
            css={css({
              width: 300
            })}
            multi
            labelField="name"
            valueField="id"
            values={selectState.dataset}
            options={datasets.results}
            onChange={val => handleSelectChange({ source: 'dataset', val })}
          />
          <Divider />
          <Text sx={{ fontWeight: '500', fontSize: 20 }}>Add Tags</Text>
          <Divider />
          <Select
            css={css({
              width: 300
            })}
            multi
            labelField="name"
            valueField="id"
            values={selectState.tag}
            options={tags.results}
            onChange={val => handleSelectChange({ source: 'tag', val })}
          />
          <Divider />
          <Flex>
            <Button
              sax={{ color: 'secondary' }}
              variant="outlined"
              onClick={handleSaveProblem}
            >
              Save Problem
            </Button>
            <Button
              sax={{ color: 'danger' }}
              variant="outlined"
              ml={10}
              onClick={() => handleClose({ type: 'back' })}
            >
              Cancel
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Text sx={{ fontWeight: '500', fontSize: 20 }}>Add Description</Text>
          <Divider />
          <DraftEditor editorReducer={editorState} dispatch={dispatch} />
          <Divider />
          <Flex>
            <Button
              sax={{ color: 'primary' }}
              variant="outlined"
              onClick={handleSaveDescription}
            >
              Done
            </Button>
            <Button
              sax={{ color: 'danger' }}
              variant="outlined"
              ml={10}
              onClick={() => handleClose({ type: 'close' })}
            >
              Close
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};

CreateProblem.propTypes = {
  datasets: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired,
  getDatasets: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
  saveProblem: PropTypes.func.isRequired
};

export default CreateProblem;
