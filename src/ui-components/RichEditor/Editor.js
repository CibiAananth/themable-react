import React from 'react';
import { Editor, Floater, MenuBar } from '@aeaton/react-prosemirror';
import { options, menu } from '@aeaton/react-prosemirror-config-default';
import { css } from 'theme-ui';
import { Box } from '@theme-ui/components';

// eslint-disable-next-line no-unused-vars
const intitalState = {
  type: 'doc',
  content: [
    {
      type: 'ordered_list',
      attrs: {
        order: 1
      },
      content: [
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'asd'
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'heelo'
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'askdj'
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'aljsd'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          marks: [
            {
              type: 'strong'
            }
          ],
          text: 'aksjdhas'
        }
      ]
    },
    {
      type: 'table',
      content: [
        {
          type: 'table_row',
          content: [
            {
              type: 'table_cell',
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'ads'
                    }
                  ]
                }
              ]
            },
            {
              type: 'table_cell',
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'asd'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'table_row',
          content: [
            {
              type: 'table_cell',
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'asd'
                    }
                  ]
                }
              ]
            },
            {
              type: 'table_cell',
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'asd'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          marks: [
            {
              type: 'em'
            },
            {
              type: 'underline'
            }
          ],
          text: 'asdkjasdasdasd'
        }
      ]
    }
  ]
};

const ProseEditor = () => {
  return (
    <Box
      css={css({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      })}
    >
      <Box
        css={css({
          width: '100%',
          height: '50%',
          overflowY: 'auto'
        })}
      >
        <Editor
          options={options}
          onChange={doc => {
            document.getElementById('output').textContent = JSON.stringify(
              doc,
              null,
              2
            );
          }}
          render={({ editor, view }) => (
            <>
              <MenuBar menu={menu} view={view} />
              <Floater view={view}>
                <MenuBar menu={{ marks: menu.marks }} view={view} />
              </Floater>
              {editor}
            </>
          )}
        />
      </Box>
      <pre id="output" />
    </Box>
  );
};

export default ProseEditor;
