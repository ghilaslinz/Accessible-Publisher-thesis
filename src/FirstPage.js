import React, { useState,useEffect,  useRef } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from   '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import { db } from "./firebase";
import { Helmet } from 'react-helmet'

import Collapse from '@mui/material/Collapse';
import { Link, useHistory } from "react-router-dom"
import {  Alert } from "react-bootstrap"
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "./contexts/AuthContext"
import { useStateValue } from "./StateProvider";
import "./App.css"
import NavBar from './components/NavBar';
import NavBarNew from './components/NavBarNew';
import CloseIcon from '@mui/icons-material/Close';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  textField: {
   
    width: '260px',
  },
  button: {
    margin : '5px',
  }
}))

function FirstPage()  {
  const classes = useStyles()
  const history = useHistory()
 // const user = useStateValue();
const {currentUser} = useAuth();
//const emailRef = useRef()

  const [title, setTitle] = useState("");
	const TITLE = 'Accessible Publisher : Create new paper'

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), author: '', university: '', email: ''},
  ]);

  const [keyword, setKeyword] = useState("");

  const [abstract, setAbstract] = useState("");
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);

  const [databases, setDatabases] = useState([]);
 // const ref = db.firestore().collection("databases");
 /*
function handleSubmit(newSchool) {
  setLoader(true);

  db.collection('users')
  .doc(currentUser?.uid)
  .collection('databases')
    //.doc() use if for some reason you want that firestore generates the id
    .doc(newSchool.id)
    .set(newSchool)
    
    .catch((err) => {
      console.error(err);
    });

    alert("Your informations has been submitted👍");
}
 
*/
function changePage() {
  history.push("/dashboard");
}
const handleSubmit = (e) => {
  if (!title || !inputFields || !keyword || !abstract) {
   // alert("Please fill all the input");
 //  setOpenAlert(true);
    return false;
  }else{


  e.preventDefault();
 
  setLoader(true);
  setMessage(true);
  db.collection('users')
  .doc(currentUser?.uid)
  .collection('databases')
  .doc()
    .set({
      id: uuidv4(),
      title: title,
      inputFields : inputFields,
      keyword: keyword,
      abstract:  abstract,
    })
    
    .then(() => {
     
      setLoader(false);
      //   alert("Your informations has been submitted👍");
      history.push("/dashboard");
    
     
     
    
    })

    .catch((error) => {
      alert(error.message);
    
      setLoader(false);
    });

  setTitle("");
  setKeyword("");
  setAbstract("");
 
  setInputFields([ { id: uuidv4(),  author: '', university: '', email: '' }])
 

}


};

/*
 // EDIT FUNCTION
 function editData(updatedData) {
  setLoading();
  db.collection('databases')
    .doc(updatedData.id)
    .update(updatedData)
    .then(() => {
      setDatabases((prev) =>
        prev.map((element) => {
          if (element.id !== updatedSchool.id) {
            return element;
          }
          return updatedSchool;
        })
      );
    })
    .catch((err) => {
      console.error(err);
    });
}
*/


  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), author: '', university: '', email: '' },
    ])
  
  };
  /*
  useEffect(() => {
    if (inputFields[inputFields.length - 1].authRef)
    inputFields[inputFields.length - 1].authRef.focus();
  }, [inputFields.length]);
 */

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    const filteredValues = values.filter((value) => value.id !== id);
    setInputFields(filteredValues);
  };

   
 
  return (
    <div>
      	<Helmet>
          <title>{ TITLE }</title>
        </Helmet>
   
        <ul class="skip-links">

<li><a href="#maincontent">Skip to the main content</a></li>
</ul>
         <NavBarNew />
     <main id="maincontent">
 {message ?  
 <Alert variant="success">document created successfully</Alert>
     : (
  <div></div>
)
 }  
      <div /*className="containe"*/>
      <h2>Create new paper</h2>
   {/*   <Collapse autoFocus in={openAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
       Please fill all the input
        </Alert>
        </Collapse>*/}
      <form className={classes.root} /*onSubmit={handleSubmit}*/>
        
      <fieldset>
      <legend>Author's informations</legend>
{ inputFields.map((inputField) => (
          <div key={inputField.id}>
            <TextField
             autoFocus
            required
              name="author"
              label="Enter Author name"
              aria-label="Enter Author name"
          id="Enter Author name"
          aria-required="true"
              variant="outlined"
            //  inputRef={event => inputField.authRef = event}
              value={inputField.author}
              className={classes.textField}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
            required
              name="university"
              label="Enter the name of the author's university"
              aria-label="Enter the name of the author's university"
              id="Enter the name of the author's university"
              aria-required="true"
              variant="outlined"
              className={classes.textField}
              value={inputField.university}
              onChange={event => handleChangeInput(inputField.id, event)}
            />

<TextField
required
              name="email"
              label="enter the author's email"
              aria-label="enter the author's email"
              id="enter the author's email"
              aria-required="true"
              variant="outlined"
              className={classes.textField}
              value={inputField.email}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <IconButton disabled={inputFields.length === 1} 
            onClick={() => handleRemoveFields(inputField.id)}
         /*   aria-label="remove author informations "
               id="remove author"*/>
              
              <RemoveIcon 
               />
               <span class="sr-only">remove author informations </span>
            </IconButton>
            <IconButton
              onClick={handleAddFields}
          /*   aria-label="Add new author"
              id="Add new author"*/
              
            >
              <AddIcon 
            />
            <span class="sr-only">Add additional author  </span>
            </IconButton>
          </div>
          
        )) }
    
 
    </fieldset>
      <fieldset>
      <legend>Paper information</legend>
      <TextField
      required
       InputProps={{
        className: classes.input,
    }}
              name="title"
              label="Enter the title of the paper here"
              aria-label="Enter the title of the paper here"
              aria-required="true"
              variant="outlined"
              value={title}
             id="Enter the title of the paper here"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
       
<TextField
required
               name="abstracts"
                label="Enter the abstract of the paper here"
                aria-label="Enter the abstract of the paper here"
               id="Enter the abstract of the paper here"
               aria-required="true"
              variant="outlined"
              multiline
              fullWidth
             
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            />

            <TextField
            required
              name="keywords"
              label="Enter keywords of the paper here"
              aria-label="Enter keywords of the paper here"
              id="Enter keywords of the paper here"
              aria-required="true"
              variant="outlined"
              value={keyword}
              
              fullWidth
              onChange={(e) => setKeyword(e.target.value)}
            />

      </fieldset>


<Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          aria-label="submit"
        
        /*  onClick={() => this.handlesubmit({ 
            id: uuidv4(),
            title: title,
            inputFields : inputFields,
            keyword: keyword,
            abstract:  abstract, })}
           */ 
          
         onClick={handleSubmit}
        
        >Confirm</Button>




<Button
	
				className={classes.button}
		
					variant='contained'
					color='default'
					type='submit'
          aria-label="cancel"
					// endIcon={<Icon>send</Icon>}
					onClick={changePage}
				>
					{" "}
					Go Back to the dashboard{" "}
				</Button>

         
      </form>
   </div>


    
        
   
    </main>
    </div>
  );
}

export default FirstPage;
