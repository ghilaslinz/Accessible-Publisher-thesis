import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import { db } from "./firebase";
import { Alert } from "react-bootstrap"
import { Link, useHistory, useParams } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "./contexts/AuthContext";
import { useStateValue } from "./StateProvider";
import { Helmet } from 'react-helmet'
import "./App.css";
import NavBarNew from "./components/NavBarNew";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  textField: {
    width: "260px",
  },
  button: {
    margin: "5px",
  },
}));

function UpdateForm() {
  const classes = useStyles();
  const history = useHistory();
  // const user = useStateValue();
  const { currentUser } = useAuth();
  const emailRef = useRef();
 
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const TITLE = 'Accessible Publisher : Update the header of the paper'
  const [inputFields, setInputFields] = useState([
    { author: "", university: "", email: "" },
  ]);

  const [keyword, setKeyword] = useState("");

  const [abstract, setAbstract] = useState("");

  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dbId, setDBId] = useState("");
  const [message, setMessage] = React.useState(false);
  const [database, setDatabases] = useState([]);
  // const ref = db.firestore().collection("databases");
  const { id } = useParams();
  console.log(database);
  console.log(inputFields);
  console.log(title);
  console.log(keyword);
  console.log(abstract);
  function getDatafromDatabse() {
    if (currentUser) {
      setLoading(true);
      db.collection("users")
        .doc(currentUser?.uid)
        .collection("databases")
        .doc(`${id}`)
        .get()
        .then((item) => {
          return item.data();

          //console.log(databases[1])
        })
        .then((d) => {
          setDatabases(d);
          setAbstract(d.abstract);
          setInputFields(d.inputFields);
          setKeyword(d.keyword);
          setTitle(d.title);
          setDBId(d.id);
          console.log(d);
          setLoading(false);
        });
    } else {
      setDatabases({});
      console.log("erreur ");
    }
  }

  useEffect(() => {
    getDatafromDatabse();
    // eslint-disable-next-line
  }, []);
  const handleSubmit = (e) => {
 
    e.preventDefault();
    // console.log(title, keyword, abstract);
    //consol.log("InputFields", inputFields);

    setLoader(true);
    setMessage(true);
    db.collection("users")
      .doc(currentUser?.uid)
      .collection("databases")
      .doc(`${id}`)
      .update({
        // id: uuidv4(),
        // id : `${id}`,
        title: title,
        inputFields: inputFields,
        keyword: keyword,
        abstract: abstract,
      })
      .then(() => {
        setLoader(false);
      //  alert("Your informations has been updated👍");

        history.push("/dashboard");
      })
      .catch((error) => {
        alert(error.message);

        setLoader(false);
      });
    /*
  setTitle("");
  setKeyword("");
  setAbstract("");
 */
    //  setInputFields([ { id: uuidv4(),  author: '', university: '', email: '' }])
    
  };

  function skipPage() {
    history.push("/dashboard");
  }
  /*
 // EDIT FUNCTION
 function editSchool(updatedSchool) {
  setLoading();
  db.collection('databases')
    .doc(updatedSchool.id)
    .update(updatedSchool)
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
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), author: "", university: "", email: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(id, 1);
    setInputFields(values);
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
       <Container>
      <div className=""  id="maincontent">
      {message ?  
 <Alert variant="success">document updated successfully</Alert>
     : (
  <div></div>
)
 }
        <h1>Update the header of the paper</h1>

        <form className={classes.root} onSubmit={handleSubmit}>

        <fieldset>
      <legend>Author's informations</legend>
          {dbId && (
            <div key={dbId}>
              {inputFields.map((inputField) => (
                <div key={inputField.id}>
                  <TextField
                  required
                  autoFocus
                    name="author"
                    label="Enter Author name"
                    id="Enter Author name"
                   // aria-label="Enter Author name"
                    variant="outlined"
                    // value={inputField.author}
                    defaultValue={inputField.author}
                    className={classes.textField}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />

                  <TextField
                  required
                    name="university"
                    label="Enter the name of the author's university"
              aria-label="Enter the name of the author's university"
              id="Enter the name of the author's university"
                    variant="outlined"
                    className={classes.textField}
                    defaultValue={inputField.university}
                    //value={inputField.university}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />

                  <TextField
                
                  required
                    name="email"
                    label="enter the author's email"
                    id="enter the author's email"
                   // aria-label="enter the author's email"
                    variant="outlined"
                    className={classes.textField}
                    //value={inputField.email}
                    defaultValue={inputField.email}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                   
                  <IconButton
                    disabled={inputFields.length === 1}
                    onClick={() => handleRemoveFields(inputField.id)}
                   // aria-label="remove author informations"
               id="remove author informations"
                  >
                    <RemoveIcon />
                    <span class="sr-only">Delete Author  </span>
                  </IconButton>
                
                  <IconButton onClick={handleAddFields}
                 // aria-label="create new author"
                  id="create new author">
                    <AddIcon />
                    <span class="sr-only">Add Author </span>
                  </IconButton>
                </div>
              ))}
            </div>
          )}
 </fieldset>
        <fieldset>
      <legend>Paper informations</legend>
          {dbId && (
            <div className="" key={dbId}>
              <TextField
              required
                InputProps={{
                  className: classes.input,
                }}
                name="title"
                label="Enter the title of the paper here"
              //  aria-label="Enter the title of the paper here"
                id="Enter the title of the paper here"
                variant="outlined"
                //value={title}
                //value= {database.title}
                value={title}
                // id={dbId}
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                // onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
          )}



          {dbId && (
            <div className="" key={dbId}>
              <TextField
              required
                name="keywords"
                label="Enter keywords of the paper here"
               // aria-label="Enter keywords of the paper here"
                id="Enter keywords of the paper here"
                variant="outlined"
                value={keyword}
                className={classes.textField}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          )}

          {dbId && (
            <div className="school" key={dbId}>
              <TextField
              required
                name="abstracts"
                label="Enter the abstract of the paper here"
               // aria-label="Enter the abstract of the paper here"
                id="Enter the abstract of the paper here"
                variant="outlined"
                multiline
                fullWidth
                // placeholder="Enter the abstract of the paper here"
                //value={database.abstract}
                defaultValue={abstract}
                onChange={(e) => setAbstract(e.target.value)}
              />
            </div>
          )}
</fieldset>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            aria-label="update"
            //endIcon={<Icon>send</Icon>}
            onClick={handleSubmit}
            // m={200}
          >
            update
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="default"
            type="submit"
            aria-label="cancel"
            //endIcon={<Icon>send</Icon>}
            onClick={skipPage}
          >
            Cancel
          </Button>
        </form>
      </div>
    </Container>
    </div>
  );
}

export default UpdateForm;
