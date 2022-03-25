import React, { useState, useMemo, useRef ,  useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

import './Bibliography.css'


// Import the Slate components and React plugin.

const Bibliography = () => {
 

  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [textareaZone, setTextareaZone] = React.useState([""]);
  const [textareaText, setTextareaText] = React.useState([""]);

//  const editor = useMemo(() => withReact(createEditor()), [])
  const handleClickOpen =  () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  // console.log(ReferencesInfo)
   

  };
  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);



  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }



  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }
  
  const handleSubmit = (e) =>  {
    
    e.preventDefault();
    setOpen(false);
    handleAddFields();
  //  console.log(textareaZone.props.children)
 //  console.log(textareaZone.props.child)
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
   
  }

  const handleAddFields = () => {
    const title = React.createElement('h1', {}, 'My First React Code');

    setTextareaZone([
      textareaZone,
    // React.createElement('h1', {}, 'My First React Code'),
    title.props.children
    ]);

  /*  console.log(textareaZone)
    setInputFields([
      ...inputFields,
      { id: uuidv4(), author: "", university: "", email: "" },
    ]);
    */
  };
  console.log(textareaZone)



console.log("this is text area" +textareaZone)

  return (
    <div id="todo-list">
        <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add References
      </Button>
   
    
     <div>
 

    {/*  <div  /*key={textareaZon.key} > </div>
    {textareaZone.map((textareaZon) => ( 
   <div    > {textareaZon}</div>
       ))}

      
      <button onclick={document.execCommand('bold')}>bold</button>
       <textarea
     style={  { fontWeight: 'bold' } }
       className="textareaZone" 
      // value={textareaZone}
       //onChange={(e) => setTextareaZone(e.target.value)}
      
    ></textarea>
      */}
     {/* 
      <input contentEditable={true}
    //   value={textareaZone}
      onChange={(e) => setTextareaZone(e.target.value)}
     
       >
         
      </input>
     
      <SunEditor
   defaultValue={textareaZone}
    onChange={handleChange} 
    getSunEditorInstance={getSunEditorInstance}
        //setContents={textareaZone}
        />
    */}

     </div>
    </div>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write your reference here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reference"
            type="email"
            fullWidth
            onChange={(e) => setTodo(e.target.value)}
          value={todo}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit } color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <ol>
      {todos.map((todo) => (
        <div key={todo.id} className="BibliographyList">
          <div className="todo-text">
           
            {todo.id === todoEditing ? (
              
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                defaultValue={todo.text}
              />
            ) : (
              
              
                  
                
                <li key={todo.key}>{todo.text}</li>
            
              
               
                  
              
               
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <CheckIcon onClick={() => submitEdits(todo.id)}>Submit Edit</CheckIcon>
             
            ) : (
             <CreateIcon onClick={() => setTodoEditing(todo.id)}>Edit</CreateIcon>
             
            )}
            <DeleteIcon onClick={() => deleteTodo(todo.id)}></DeleteIcon>

          </div>
        </div>
      ))}
      </ol>
    </div>
  );
};


export default Bibliography

