import React, { useEffect, useRef } from "react";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  CompositeDecorator,
  EditorState,
  Modifier,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import './DraftResult.css'
import { v4 as uuidv4 } from "uuid";
// Following sample is based the article https://dev.to/rose/draft-js-simple-content-manipulation-b7a
const Link = ({ entityKey, contentState, children }) => {
  let { url } = contentState.getEntity(entityKey).getData();
  return (
    <span>
      
        <a
          style={{
            color: "blue",
            fontSize: 11,
            marginBottom: 12,
            cursor: "pointer",
          }}
          onClick={() => {
            try {
              document.getElementById(url.toString()).scrollIntoView();
            } catch (error) {
              console.error(error);
            }
          }}
          href={url}
        >
          {children}
        </a>
      
    </span>
  );
};
const MAX_LENGTH = 1000;
const LinkFoot = ({ entityKeyFoot, contentState, children }) => {
  let { url } = contentState.getEntity(entityKeyFoot).getData();
  return (
    <span>
      
        <a
          style={{
            color: "red",
            fontSize: 11,
            marginBottom: 12,
            cursor: "pointer",
          }}
          onClick={() => {
            try {
              document.getElementById(url.toString()).scrollIntoView();
            } catch (error) {
              console.error(error);
            }
          }}
          href={url}
        >
          {children}
        </a>
      
    </span>
  );
};

const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};

const findLinkEntitiesFoot = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKeyFoot = character.getEntity();
    return (
      entityKeyFoot !== null &&
      contentState.getEntity(entityKeyFoot).getType() === "LINK"
    );
  }, callback);
};


export const createLinkDecorator = () =>
  new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);

  export const createLinkDecoratorFoot = () =>
  new CompositeDecorator([
    {
      strategy: findLinkEntitiesFoot,
      component: LinkFoot,
    },
  ]);


export const onAddLink = (
  editorState,
  setEditorState,
  count,
  url,
  id,
  handleChangeEditorState
) => {
  const decorator = createLinkDecorator();
  const selection = editorState.getSelection();
  const currentContent = editorState.getCurrentContent();
  currentContent.createEntity("LINK", "MUTABLE", {
    url: url,
    selectionState: selection,
  });
  let entityKey = currentContent.getLastCreatedEntityKey();
  const textWithEntity = Modifier.insertText(
    currentContent,
    selection,
    `[${count}]`,
    null,
    entityKey
  );
  let newState = EditorState.createWithContent(textWithEntity, decorator);
  setEditorState(newState);
  handleChangeEditorState(
    id,
    JSON.stringify(convertToRaw(newState.getCurrentContent()))
  );
  return entityKey;
};

export const onAddLinkFoot = (
  editorState,
  setEditorState,
  countFoot,
  url,
  id,
  handleChangeEditorState
) => {
  const decorator = createLinkDecoratorFoot();
  const selection = editorState.getSelection();
  const currentContent = editorState.getCurrentContent();
  currentContent.createEntity("LINK", "MUTABLE", {
    url: url,
    selectionState: selection,
  });
  let entityKeyFoot = currentContent.getLastCreatedEntityKey();
  const textWithEntity = Modifier.insertText(
    currentContent,
    selection,
    `[${countFoot}]`,
    null,
    entityKeyFoot
  );
  let newState = EditorState.createWithContent(textWithEntity, decorator);
  setEditorState(newState);
  handleChangeEditorState(
    id,
    JSON.stringify(convertToRaw(newState.getCurrentContent()))
  );
  return entityKeyFoot;
};



const Draft = (props) => {
  const [open, setOpen] = useState(false);
  const [openfoot, setOpenFoot] = useState(false);
  const [bibliography, setBibliography] = useState("");
  const [footnote, setFootnote] = useState("");

  const [editorState, setEditorState] = useState(
    props.editorState
      ? typeof props.editorState === "string"
        ? EditorState.createWithContent(
            convertFromRaw(JSON.parse(props.editorState))
          )
        : EditorState.createWithContent(props.editorState.getCurrentContent())
      : EditorState.createEmpty()
  );
  //  const editor = useMemo(() => withReact(createEditor()), [])

  const ref = useRef();

  useEffect(() => {
    try {
      focusEditor();
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log();

  useEffect(() => {
    try {
      const decorator = createLinkDecorator();
      props.bibliographys.forEach((bibliography, index) => {
        if (bibliography.editorId === props.id) {
          const currentContent = editorState.getCurrentContent();
          const plainText = currentContent.getPlainText();

          const startIndex = plainText.search(`[${bibliography.number}]`) - 1;
          const endIndex = startIndex + 3;
          const selection = editorState.getSelection();
          const anchorKey = selection.getAnchorKey();
          const focusKey = selection.getFocusKey();
          selection.set("anchorOffset", startIndex);
          selection.set("focusOffset", endIndex);
          const updatedSelection = selection.merge({
            focusKey,
            focusOffset: endIndex,
            anchorKey,
            anchorOffset: startIndex,
          });
          let newState = Modifier.replaceText(
            editorState.getCurrentContent(),
            updatedSelection,
            `[${index + 1}]`,
            null,
            bibliography.entityKey
          );
          let newEditorState = EditorState.createWithContent(
            newState,
            decorator
          );

          setEditorState(newEditorState);
        }
      });


     
    } catch (error) {
      console.error(error);
    }
  }, [props.bibliographys]);

  useEffect(() => {
    try {
      const decorator = createLinkDecoratorFoot();
    

      props.footnotes.forEach((footnote, index) => {
        if (footnote.editorId === props.id) {
          const currentContent = editorState.getCurrentContent();
          const plainText = currentContent.getPlainText();

          const startIndex = plainText.search(`[${footnote.number}]`) - 1;
          const endIndex = startIndex + 3;
          const selection = editorState.getSelection();
          const anchorKey = selection.getAnchorKey();
          const focusKey = selection.getFocusKey();
          selection.set("anchorOffset", startIndex);
          selection.set("focusOffset", endIndex);
          const updatedSelection = selection.merge({
            focusKey,
            focusOffset: endIndex,
            anchorKey,
            anchorOffset: startIndex,
          });
          let newState = Modifier.replaceText(
            editorState.getCurrentContent(),
            updatedSelection,
            `[${index + 1}]`,
            null,
           footnote.entityKeyFoot
          );
          let newEditorState = EditorState.createWithContent(
            newState,
            decorator
          );

          setEditorState(newEditorState);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [props.footnotes]);
  useEffect(() => {
    try {
      const currentContent = editorState.getCurrentContent();
      const plainText = currentContent.getPlainText();
      props.bibliographys.forEach((bibliography, index) => {
        if (bibliography.editorId === props.id) {
          if (plainText.search(`[${index + 1}]`) === -1) {
            props.deleteBibliography(bibliography.id);
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [editorState, props.id]);


  useEffect(() => {
    try {
      const currentContent = editorState.getCurrentContent();
      const plainText = currentContent.getPlainText();
      props.footnotes.forEach((footnote, index) => {
        if (footnote.editorId === props.id) {
          if (plainText.search(`[${index + 1}]`) === -1) {
            props.deleteFootnote(footnote.id);
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [editorState, props.id]);

  const focusEditor = () => {
    if (ref) {
      ref.current.focusEditor();
    }
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    props.handleChangeEditorState(
      props.id,
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenFoot = () => {
    setOpenFoot(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  const handleCloseFoot = (e) => {
    setOpenFoot(false);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    //  console.log(textareaZone.props.children)
    //  console.log(textareaZone.props.child)

    const time = Date.now();

    const entityKey = onAddLink(
      editorState,
      setEditorState,
      props.count,
      `${time}`,
      props.id,
      props.handleChangeEditorState
    );

    
    const newBibliography = {
      id: time,
      //   id: count,
      text: bibliography,
      number: props.count,
      // completed: false,
      entityKey,
      editorId: props.id,
    };
    //  props.handleAddTodoText("number of reference");
    // props.setEditorState("Sample text to put in editor ");
    props.setBibliographys([...props.bibliographys].concat(newBibliography));
    props.setCount(props.count + 1);
    setBibliography("");
  };



  const handleSubmitFoot = (e) => {
    e.preventDefault();
    setOpenFoot(false);

    //  console.log(textareaZone.props.children)
    //  console.log(textareaZone.props.child)

    const time = Date.now();

    const entityKeyFoot = onAddLinkFoot(
      editorState,
      setEditorState,
      props.countFoot,
      `${time}`,
      props.id,
      props.handleChangeEditorState
    );

    
    const newFootnote = {
      id: time,
      //   id: count,
      text: footnote,
      number: props.countFoot,
      // completed: false,
      entityKeyFoot,
      editorId: props.id,
    };
    //  props.handleAddTodoText("number of reference");
    // props.setEditorState("Sample text to put in editor ");
    props.setFootnotes([...props.footnotes].concat(newFootnote));
    props.setCountFoot(props.countFoot + 1);
    setFootnote("");
  };

  const styleMap = {
    "header-three": {
      //'backgroundColor': '#faed27',

      'fontSize': '13.5px',
     'fontWeight':'bold',
     'color' : 'blue'
    }
  };

 const createCustomPlugin = (config) => {
    const blockStyleFn = (contentBlock) => {
      if (contentBlock.getType() === 'blockquote') {
        return 'superFancyBlockquote';
      }
    };
    
    const customStyleMap = {
      'STRIKETHROUGH': {
        textDecoration: 'line-through',
      },
    };
  
 }

  return (
    <div>
      <>
      <EditorStyled>
          <Editor

          readOnly
          toolbarHidden
        
            ref={ref}
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: ["inline", "blockType", "list", "textAlign", "history"],
              inline: { inDropdown: false },
              blockType: {
                inDropdown: false,
                options: ["Normal", "H3", "H4", "Code"],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
              list: { inDropdown: false },
              textAlign: { inDropdown: false },
              link: { inDropdown: false },
              history: { inDropdown: false },
            }}
            customDecorators={[
              {
                strategy: findLinkEntities,
                component: Link,
              },
              {
                strategy: findLinkEntitiesFoot,
                component: LinkFoot,
              },
            ]}
          />
       </EditorStyled>
        <div>
          {/*
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add reference
          </Button>
          */}
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>Write your reference here</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="bibliography"
              type="email"
              fullWidth
              onChange={(e) => setBibliography(e.target.value)}
              value={bibliography}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        {/*
          <button
            type="button"
            onClick={this.sendTextToEditor.bind(
              this,
              "Sample text to put in editor"
            )}
          >
            Insert
          </button>
        
          <br />
        
        <Todo setEditorState={this.sendTextToEditor} /> */}
      </>
    </div>
  );
};

const EditorStyled = styled.div`
 
  maxWidth: 780px;
  maxHeight: 150px;
  margin-left: 10px;
  margin-bottom: 20px;
  margin-top:20px;
 
`;
export default Draft;
