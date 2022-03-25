import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
function uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }
  
class MyEditor extends React.Component {
    editorStyles = {
        /*'width':'200px',
        'margin':'10px',
        'border':'1px solid gray'
        */
        'width': '500px',
       
        'margin' : '5px',
        'border':'1px solid gray'
    };
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = (editorState) => this.setState({editorState});
    }
    handleKeyCommand(command) {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }
    getContentAsRawJson() {
        const contentState = this.state.editorState.getCurrentContent();
        const raw = convertToRaw(contentState);

        return JSON.stringify(raw, null, 2);
    }
    saveContent() {
        const json = this.getContentAsRawJson();
        localStorage.setItem('DraftEditorContentJson', json);
    }
    loadContent() {
        const savedData = localStorage.getItem('DraftEditorContentJson');
        return savedData ? JSON.parse(savedData) : null;
    }
    setEditorContent() {
        const rawEditorData = this.loadContent();
        if (rawEditorData !== null) {
            const contentState = convertFromRaw(rawEditorData);
            const newEditorState = EditorState.createWithContent(contentState);
            this.setState({ editorState: newEditorState });
        }
    }
    render() {
        return (
            <div>
                <div style={{ 'margin': '10px' }}>
                    <button onClick={() => this.handleKeyCommand("bold")}>Bold</button>
                    <button onClick={() => this.handleKeyCommand("italic")}>Italic</button>
                    <button onClick={() => this.handleKeyCommand("underline")}>Underline</button>
                   {/* <button onClick={() => this.handleKeyCommand("code")}>Code</button> */}
                   {/* <button onClick={() => this.handleKeyCommand("code")}>Code</button>  */}
                </div>
                <div style={this.editorStyles}>
                    <Editor 
                    
                        editorState={this.state.editorState} 
                        onChange={this.onChange} 
                        handleKeyCommand={this.handleKeyCommand.bind(this)} 
                        toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                           
                          }}
                    />
                </div>
                {/*
                <div style={{ 'margin': '10px' }}>
                    <button onClick={this.saveContent.bind(this)}>Save content</button>
                    <button onClick={this.setEditorContent.bind(this)}>Load content</button>
                </div>
                */}

                {/*
                <div>
                    <pre>
                        {this.getContentAsRawJson()}
                    </pre>
                </div>
                */}
            </div>
        );
    }
}

export default MyEditor;