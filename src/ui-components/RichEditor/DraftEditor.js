/** @jsx jsx */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from 'theme-ui';
// editor
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DraftEditor = ({ editorReducer, dispatch }) => {
  const [editor, setEditor] = useState();

  useEffect(() => {
    const contentBlock = htmlToDraft(editorReducer.html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditor(editorState);
    }
  }, [editorReducer.html]);

  useEffect(() => {
    if (editorReducer.getContentFromEditor) {
      dispatch({
        type: 'POST_CONTENT_FROM_EDITOR',
        payload: {
          html: draftToHtml(convertToRaw(editor.getCurrentContent()))
        }
      });
    }
  }, [editorReducer.getContentFromEditor, dispatch, editor]);

  return (
    <div
      sx={{
        border: '1px solid',
        borderColor: 'inputBorder',
        p: 10
      }}
      css={css({
        '& .editor-wrapper': {
          height: '50vh',
          overflow: 'auto'
        }
      })}
    >
      <Editor
        editorState={editor}
        wrapperClassName="editor-wrapper"
        editorClassName="editor-editor"
        // onContentStateChange={onContentStateChange}
        onEditorStateChange={state => setEditor(state)}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'APPLE', value: 'apple', url: 'apple' },
            { text: 'BANANA', value: 'banana', url: 'banana' }
          ]
        }}
        hashtag={{
          separator: ' ',
          trigger: '#'
        }}
      />
    </div>
  );
};

DraftEditor.propTypes = {
  editorReducer: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

DraftEditor.defaultProps = {
  editorReducer: {}
};

export default DraftEditor;
