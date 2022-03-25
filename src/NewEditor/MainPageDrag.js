import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { useStateValue } from "../StateProvider";
import { useAuth } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Draft from './DraftBibliography'
import FunctionsIcon from '@mui/icons-material/Functions';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import $ from 'jquery';
import Paper from '@mui/material/Paper';
import DisplayId from './DisplayId'
//import FunctionsIcon from '@mui/icons-material/Functions';

import TextFieldsIcon from "@material-ui/icons/TextFields";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import ImageIcon from "@material-ui/icons/Image";
import CodeIcon from "@material-ui/icons/Code";
import TableChartIcon from "@material-ui/icons/TableChart";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {  Alert } from "react-bootstrap"
import { InputAdornment } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import { ExpyandMore } from "@material-ui/icons";
import TitleIcon from "@material-ui/icons/Title";
import ShortTextIcon from "@material-ui/icons/ShortText";

import '../components/skip.css'
import MathJaxFunction from "./MathJaxFunction";
import Image from "./Image";
import NestedDataTable from "./NestedDataTable";
import { Flag } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Button from "@mui/material/Button";
import Collapse from '@mui/material/Collapse';
import { db, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { Check, Create, Delete } from "@mui/icons-material";
import "./Sidebar.css";
import NavBarNew from "../components/NavBarNew";
import { Helmet } from 'react-helmet'
import { EditorState } from "draft-js";
const drawerWidth = 240;
const heights = {
  HAUT : 200,
  IMAGE: 350,
  HEADER: 62,
  MATH: 186,
  EDITOR:200,
  TABLE: 67,
  FOOTNOTE: 64,
};
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 16,
    fontWeight: "bold",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiInput-input": {
      fontSize: 35,
    },
  },
  textZone: {
    color: "green",
    //width: "70vw",
    maxWidth: "780px",
  

    marginBottom: "5px",
  },
  size:{
    fontSize:"13.5",
    fontWeight:"bold"

  },
  paper: {
    width: '100%',
    height: '500px',
  
  },
  button: {
    margin: theme.spacing(2),
  },

  confirmButton: {
    marginBottom: "40",
  },
  abouche: {
    /* border: '1px solid #e2e2e1',*/
    // overflow: 'hidden',
    /*borderRadius: 4,*/
    // backgroundColor: '#fcfcfb',
    fontSize: 16,
    fontWeight: "bold",

    margin: "5px",
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
    /*'&:hover': {
       backgroundColor: '#fff',
     },*/
    /*      '&$focused': {
       backgroundColor: '#fff',
     //  boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
       borderColor: theme.palette.primary.main,
     },*/
  },
}));

const useStylesReddit = makeStyles((theme) => ({
  root: {
    /* border: '1px solid #e2e2e1',*/
    // overflow: 'hidden',
    /*borderRadius: 4,*/
    // backgroundColor: '#fcfcfb',
    fontSize: 16,
    fontWeight: "bold",

    margin: "5px",
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
    /*'&:hover': {
      backgroundColor: '#fff',
    },*/
    /*      '&$focused': {
      backgroundColor: '#fff',
    //  boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },*/
  },
  //  focused: {},
}));

const useStylesTwo = makeStyles((theme) => ({
  root: {
    /* border: '1px solid #e2e2e1',*/
    // overflow: 'hidden',
    /*borderRadius: 4,*/
    // backgroundColor: '#fcfcfb',
    fontSize: 16,
    fontWeight: "bold",
    width: "500px",

    margin: "5px",
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
    /*'&:hover': {
      backgroundColor: '#fff',
    },*/
    /*      '&$focused': {
      backgroundColor: '#fff',
    //  boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },*/
  },
  //  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField
      // InputProps={{classes}}
      {...props}
    />
  );
}


function TwoTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField
      InputProps={{
        classes,
        disableUnderline: false,
        startAdornment: (
          <InputAdornment position="start">
            <h2 />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}

function ResponsiveDrawer(props) {
 


  const history = useHistory();
	const { id } = useParams();
	const [database, setDatabases] = useState({});
	const [universitySet, setUniversitySet] = useState([]);
	const [loading, setLoading] = useState(false);
	const { currentUser } = useAuth();
  const [message, setMessage] = React.useState(false);
	const TITLE = 'Accessible Publisher : Editor'
  const [dbId, setDBId] = useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  // const {currentUser} = useAuth();
  const classe = useStylesReddit();
  const classes = useStyles();
  const [flag, setFlag] = useState(false);
  const [ok, setOk] = useState(true);
  const [elements, setElements] = useState([]);
  const [dataImage, setdataImages] = useState([]);
  const [elementsRef, setElementsRef] = useState([]);
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(1);
  const [countFoot, setCountFoot] = useState(1);
  const [bibliographys, setBibliographys] = useState([]);
  const [bibliographyEditing, setBibliographyEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [editingTextFoot, setEditingTextFoot] = useState("");
  const [counterRef, setCounterRef] = useState("false");
  const [  editorData, setEditorData] = useState([]);
  const [footnotes, setFootnotes] = useState([]);
  const [footnoteEditing, setFootnoteEditing] = useState(null);


  const [loader, setLoader] = useState(false);
  const [headingFirsts, setheadingFirsts] = useState();

  const [headingSeconds, setheadingSeconds] = useState([
    { id: uuidv4(), headingSecond: "" },
  ]);

  const [firstPageItemHeight, setFirstPageItemHeight] = useState(0);

  const elementRef = useRef(null);

  /*
          const handleChangeInput = (id, event) => {
            const newheadingFirsts = headingFirsts.map(i => {
              if(id === i.id) {
                i[event.target.name] = event.target.value
              }
              return i;
            })
            
            setheadingFirsts(newheadingFirsts);
          }
*/

useEffect(() => {
  setFirstPageItemHeight(elementRef?.current?.clientHeight || 0);
});
function submitEditsFoot(id) {
  const updatedFootnotes = [...footnotes].map((footnote) => {
    if (footnote.id === id) {
      footnote.text = editingTextFoot;
    }
    return footnote;
  });
  setFootnotes(updatedFootnotes);
  setFootnoteEditing(null);
}

  const handleChangeInput = (id, event) => {
    if (/^\s/.test(event.target.value)) {
      return;
    } else {
      const newElements = elements.map((i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      });
      setElements(newElements);
    }
  };

  /*
  var pageCount = $('#long-content').height()/800;
var contentLength = $('#long-content').text().length;
var perPageLength = Math.floor(contentLength/pageCount);
console.log(perPageLength)
//var re = new RegExp("(.{1,"+perPageLength+"})",'g'); 
//var chunks = $('#long-content').text().match(re);
var chunks = [];
for(var i=0;i<=pageCount;i++){
    chunks.push($('#long-content').text().substring(i*perPageLength,i*perPageLength+perPageLength))
    console.log(i);
     console.log(perPageLength);
      console.log(pageCount);
}
console.log(chunks);
var paged = '<div class="page">'+chunks.join('</div><div class="page">')+'</div>';
$('#long-content').html(paged);
*/
/*
var $doc = $('#doc *');
var pageHeight = 700;

var counta = 0

while ($doc.length && ++counta < 100) {

    var $li = $('<li>');
    $('ul').append($li);

    var min = 0;
    var max = $doc.length;
    var mid;

    console.log('new search');
    console.log(min, max);

    while (max - min > 1) {

        console.log(min, max);

        $li.empty();
        mid = Math.floor((max + min) / 2);
        $li.append($doc.slice(0, mid + 1));

        if ($li.height() > pageHeight) {
            max = mid
        } else {
            min = mid;
        }
    }

    $li.css('height', pageHeight);
    $doc.splice(0, min + 1);
}
*/
  /*
          const handleChangeheadingSeconds = (id, event) => {
            const newheadingSeconds = headingSeconds.map(i => {
              if(id === i.id) {
                i[event.target.name] = event.target.value
              }
              return i;
            })
            
            setheadingSeconds(newheadingSeconds);
          }
        */

  /* 
          const handleAddFields = () => {
               setCounter(counter + 1);

               console.log(counter) 
            setheadingFirsts([
            ...headingFirsts,
              {   id: uuidv4(),headingFirst: ""},
            ]);
          };
*/

  const handleAddFields = () => {
    setCounter(counter + 1);

    setElements([
      ...elements,
      { id: uuidv4(), text: "", type: "headingFirst" },
    ]);
  };

  const handleAddThirdLevel = () => {
   

    setElements([
      ...elements,
      { id: uuidv4(), text: "", type: "headingThirdLevel" },
    ]);
  };

  const handleAddFourthLevel = () => {
   

    setElements([
      ...elements,
      { id: uuidv4(), text: "", type: "headingFourthLevel" },
    ]);
  };



  function handleAddHaut(){
   

    setElements([
      ...elements,
      { id: uuidv4(), text: "", type: "haut" },
    ]);
  };



  const handleAddBox = () => {


    setElements([
      ...elements,
      { id: uuidv4(), Box: "", type: "Box" },
    ]);
  };

  /*
          const handleRemoveFields = (id) => {
            setCounter(counter - 1);
            console.log(counter)
            const values = [...headingFirsts];
            const filteredValues = values.filter((value) => value.id !== id);
            setheadingFirsts(filteredValues);
          };
*/
  const handleRemoveFields = (id) => {
    setCounter(counter - 1);
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    setElements(filteredValues);
  };

  function deleteBibliography(id) {
    let updatedBibliographys = [...bibliographys].filter(
      (bibliography) => bibliography.id !== id
    );
    setBibliographys(updatedBibliographys);
    setCount(updatedBibliographys.length + 1);
  }
  function deleteFootnote(id) {
    let updatedFootnotes = [...footnotes].filter(
      (footnote) => footnote.id !== id
    );
    setFootnotes(updatedFootnotes);
    setCountFoot(updatedFootnotes.length + 1);
  }
  /*
          const handleAddheadingSeconds = () => {
            if(counter > 0){ 
            setheadingSeconds([
            ...headingSeconds,
              {   id: uuidv4(),headingSecond: ""},
            ]);
          
          };
        }
*/

  const handleAddheadingSeconds = () => {
    if (counter > 0) {
      setElements([
        ...elements,
        { id: uuidv4(), text: "", type: "headingSecond" },
      ]);
    }
  };

  const handleRemoveheadingSeconds = (id) => {
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    setElements(filteredValues);
  };

  const handleRemoveheadingThirds = (id) => {
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    setElements(filteredValues);
  };

  const handleRemoveheadingFourths = (id) => {
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    setElements(filteredValues);
  };

 


  const handleRemoveMath = (id) => {
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    setElements(filteredValues);
  };
  const handleAddEditor = () => {
    setElements([
      ...elements,
      { id: uuidv4(), editor: EditorState.createEmpty(), type: "editor" },
    ]);
    setCounterRef("true");
  };

  const handleChangeEditorState = (elementId, editorState) => {
    try {
      const elementIndex = elements.findIndex(
        (element) => element.id === elementId
      );

      const element = elements[elementIndex];

      element.editor = editorState;

      const newElements = [...elements];
      newElements[elementIndex] = element;

      setElements(newElements);
    } catch (error) {
      console.error(error);
    }
  };


  const handleAddMathjax = () => {
    setElements([...elements, { id: uuidv4(), type: "mathjax" }]);
  };

  const handleMathjaxChange = (event, id) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.text = event.target.value;

    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);
  };


 




  const handleDraftChange = (event, id) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.editorData = event.target.value;

    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);
  };

  const handleImageChange = (imageFile, imageUrl, id) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.image = imageUrl;

    element.imageFile = imageFile;

    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);
  };

  const handleRemoveEditor = (id) => {
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    if (filteredValues.find((val) => val.type === "editor")) {
      setElements(filteredValues);
    } else {
      setElements([]);
    }
  };

  const handleRemoveReference = (id) => {
    const values = [...elementsRef];
    const filteredValues = values.filter((value) => value.id !== id);
    if (filteredValues.find((val) => val.type === "reference")) {
      setElementsRef(filteredValues);
    } else {
      setElementsRef([]);
    }
  };

  const handleRemoveTable = (id) => {
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    if (filteredValues.find((val) => val.type === "nestedtable")) {
      setElements(filteredValues);
    } else {
      setElements([]);
    }
  };

  const handleRemoveImage = (id) => {
    const values = [...elements];
    const filteredValues = values.filter((value) => value.id !== id);
    setElements(filteredValues);
  };

  function submitEdits(id) {
    const updatedBibliographys = [...bibliographys].map((bibliography) => {
      if (bibliography.id === id) {
        bibliography.text = editingText;
      }
      return bibliography;
    });
    setBibliographys(updatedBibliographys);
    setBibliographyEditing(null);
  }

  const handleAddImage = () => {
    setElements([
      ...elements,
      { id: uuidv4(), image: "", type: "image", caption: "", imageFile: "" },
    ]);
  };

  const handleChangeImageCaption = (event, id) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.caption = event.target.value;

    
    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);



  };

  const handleChangeImageAlt = (event, id) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.alt = event.target.value;

    
    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);



  };



  const handleChangeTableCaption = (event, id) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.tableCaption = event.target.value;

    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);
  };


  const handleAddNestedTable = () => {
    setElements([
      ...elements,
      { id: uuidv4(), table: { isHeader: false }, type: "nestedtable" },
    ]);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const uploadFile = async (path, file, fileName) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const uploadTask = storage.ref(`${path}/${fileName}`).put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
            reject(error);
          },
          async () => {
            const url = await storage
              .ref(path)
              .child(fileName)
              .getDownloadURL();
            if (url && typeof url === "string") {
              console.log(url);
              resolve(url);
            }
          }
        );
      });
    } else {
      return "";
    }
  };
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(elements);
const [reorderedItem] = items.splice(result.source.index, 1);
items.splice(result.destination.index, 0, reorderedItem);

setElements(items);
  }
  const handleSubmit = async (e) => {


    e.preventDefault();

    setLoader(true);
    setMessage(true);
    const elementsClone = [...elements];

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

    if (element.type === "image" && !element.caption) {
      alert("Please fill image's caption input");
      return false;
    }

    if (element.type === "nestedtable" && !element.tableCaption) {
      alert("Please fill table's caption input");
      return false;
    }
  }
    for (let i = 0; i < elementsClone.length; i++) {
      const element = elementsClone[i];

      if (element.type === "image" && element.image && element.imageFile ) {
        const url = await uploadFile(
          `/images/${uuidv4()}`,
          element.imageFile,
          element.imageFile.name
        );
     
    
        
        console.log(url);
        element.image = url;
        delete element.imageFile;
      }
    }
    setMessage(true);
    db.collection('users')
    .doc(currentUser?.uid)
    .collection("databases")
  
    .doc(`${id}`)
      .update({
        id: uuidv4(),
        elements: elements,
       
        bibliographys : bibliographys,
        editorData:  editorData,
      })
      .then(() => {
        setLoader(false);
      //  alert("Your informations has been submitted👍");
        console.log(elements);

        //  history.push("/dashboard");
      })
      .catch((error) => {
        alert(error.message);

        setLoader(false);
      });
    
  };

  const drawer = (
    
    <div>
  
     
      <Toolbar />

      <Divider />
      <List sx={{ marginTop: '50px' }}>
        <div className="">
          <div >


            <ListItem button onClick={handleAddFields}>
              <ListItemIcon>
                <TextFieldsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="First level heading" />
            </ListItem>


             
            <ListItem button onClick={handleAddheadingSeconds}>
              <ListItemIcon>
                <TextFieldsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Second level heading" disabled={counter === 0} />
            </ListItem>

            <ListItem button onClick={handleAddThirdLevel}>
              <ListItemIcon>
                <TextFieldsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Third level heading" />
            </ListItem>

            <ListItem button onClick={handleAddFourthLevel}>
              <ListItemIcon>
                <TextFieldsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Fourth level heading" />
            </ListItem>

            <ListItem button onClick={handleAddEditor}>
              <ListItemIcon>
                <TextFieldsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Add Text" />
            </ListItem>


            <ListItem button onClick={handleAddImage}>
              <ListItemIcon>
                <ImageIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="upload image" />
            </ListItem>

            <ListItem button onClick={handleAddMathjax}>
              <ListItemIcon>
                 <FunctionsIcon fontSize="large"
                 
                  />
                  
              </ListItemIcon>
              <ListItemText primary="Add Math function with MathJax" />
            </ListItem>

            <ListItem button onClick={handleAddNestedTable}>
              <ListItemIcon>
                <TableChartIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Create table" />
            </ListItem>

            <Divider />
            <Button
         className={classes.confirmButton}
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
      >
        Send to database
      </Button>
   
<div className="espace">  </div>

<Link to={`/finalresult/${id}`}>
			  <Button
				//aria-required="true"
		
				className={classes.button}
				variant="contained"
				color="primary"
				type="submit"
				// endIcon={<Icon>send</Icon>}
			  >
				{" "}
				Display the result
			  </Button>
			</Link>
          </div>
        </div>
      </List>
      <Divider />
    </div>
  );

  const handleAddCell = (
    id,
    cellId,
    isChild,
    parent,
    row,
    col,
    totalRows,
    totalCols
  ) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.table = {
      ...element.table,
      [cellId]: {
        isChild,
        parent,
        row,
        col,
        totalRows,
        totalCols,
        text: "",
      },
    };
    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);
  };

  const handleEditCellText = (tableId, cellId, text) => {
    const tableIndex = elements.findIndex((element) => element.id === tableId);

    const table = elements[tableIndex];

    table.table = {
      ...table.table,
      [cellId]: {
        ...table.table[cellId],
        text: text,
      },
    };

    const newElements = [...elements];

    newElements[tableIndex] = table;

    setElements(newElements);
  };
  const handleMakeHeader = (tableId) => {
    const tableIndex = elements.findIndex((element) => element.id === tableId);

    const table = elements[tableIndex];

    table.table = {
      ...table.table,
      isHeader: !table.table.isHeader,
    };

    const newElements = [...elements];

    newElements[tableIndex] = table;

    setElements(newElements);
  };

  const handleDeleteCell = (tableId, cellId) => {
    const tableIndex = elements.findIndex((element) => element.id === tableId);

    const table = elements[tableIndex];

    const tableClone = { ...table.table };

    delete tableClone[cellId];

    Object.keys(tableClone).forEach((key) => {
      if (tableClone[key].parentId === cellId) {
        delete tableClone[key];
      }
    });

    if (Object.keys(tableClone).length === 0) {
      setElements(elements.filter((element) => element.id !== tableId));
    } else {
      table.table = { ...tableClone };

      const newElements = [...elements];

      newElements[tableIndex] = table;

      setElements(newElements);
    }
  };


  const container =
    window !== undefined ? () => window().document.body : undefined;
    /*
  useEffect(() => {
    function getDatafromDatabse() {
      setLoading(true);
      db.collection("databases")
        .doc(`${id}`)
        .get()
        .then((item) => {
          return item.data();

          //console.log(databases[1])
        })
        .then((d) => {
          setDatabases(d);
          setElements(d.elements || []);
          setDBId(d.id);
          setLoading(false);
          setBibliographys(d.bibliographys || []);
          setCount(d?.bibliographys?.length + 1 || 1);
        });
    }
    getDatafromDatabse();
  }, []);
  */

    useEffect(() => {
    
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
          setUniversitySet(
          d.inputFields.filter((item, index) => {
            return (
            d.inputFields.findIndex(
              (field) => field.university === item.university
            ) === index
            );
          })
          );
          setDatabases(d);
      //    setElements(d.elements)
      setElements(d.elements || []);
          setDBId(d.id);
          setLoading(false);
          setBibliographys(d.bibliographys || []);
          setCount(d?.bibliographys?.length + 1 || 1);
        });
      } else {
        setDatabases({});
        console.log("erreur ");
      }
      }
      handleAddHaut();
      getDatafromDatabse();
     

    }, []);
  

/*
    useEffect(() => {
      function getDatafromDatabse() {
        if (currentUser) {
        setLoading(true);
        db.collection("databases")
          .doc(`${id}`)
          .get()
          .then((item) => {
            return item.data();
  
            //console.log(databases[1])
          })
          .then((d) => {
          setDatabases(d);
         
           setElements(d.elements || []);
            setDBId(d.id);
            setLoading(false);
            setBibliographys(d.bibliographys || []);
            setCount(d?.bibliographys?.length + 1 || 1); 
          });
        
      } else {
        setDatabases({});
        console.log("erreur ");
      }

      }
      getDatafromDatabse();
    }, []);
  */
/*
    useEffect(() => {
      function getDatafromDatabse() {
        if (currentUser) {
          setLoading(true);
        db.collection("databases")
          .get()
          .then((item) => {
            const items = item.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            console.log(items);
  
            setDatabases(items);
            setElements(items.elements || []);
            setDBId(items.id);
            setLoading(false);
          });
        } else {
          setDatabases({});
          console.log("erreur ");
        }
      }
      getDatafromDatabse();
    }, []);
    */
   const getHeight = (type) => {
    switch (type) {
      case "haut": {
        return heights.HAUT;
      }
    
      case "headingFirst": {
        return heights.HEADER;
      }
      case "headingSecond": {
        return heights.HEADER;
      }
      case "image": {
        return heights.IMAGE;
      }
      case "editor": {
        return heights.EDITOR;
      }
      case "mathjax": {
        return heights.MATH;
      }
      case "nestedtable": {
        return heights.TABLE;
      }
      default: {
        return 0;
      }
    }
  };

  const renderPages = () => {
    let currentPage = 0;
    let currentHeight = 0;
    const pages = [];
    for (let i = 0; i < elements.length; i++) {
      if (!pages[currentPage]) {
        pages[currentPage] = [];
      }
      const nextElement = elements[i];
      let nextElementHeight = getHeight(nextElement.type);
      if (nextElement.type === "nestedtable") {
        const rows = [];
        Object.values(nextElement.table).map((val) => {
          if (!rows.includes(val.row)) {
            rows.push(val.row);
          }
        });
        nextElementHeight *= Math.max(rows.length, 1);
        nextElementHeight += 90;
      }

      if (nextElement.type === "editor") {
        const editorFootnotes = footnotes.filter(
          (note) => note.editorId === nextElement.id
        );
        nextElementHeight += editorFootnotes.length * heights.FOOTNOTE;
      }
      if (currentHeight + nextElementHeight <= 800) {
        pages[currentPage].push(nextElement);
        currentHeight += nextElementHeight;
      } else {
        currentPage++;
        if (!pages[currentPage]) {
          pages[currentPage] = [];
        }
        pages[currentPage].push(nextElement);
        currentHeight = nextElementHeight;
      }
    }
    return pages;
  };

  

  const renderContent = () => {
    let currentIndex = 0;





    return renderPages().map((page, pageIndex) => (
    
      <div
        style={{
          padding: 20,
          paddingLeft : 30,
          height: 1056,
          width: 816,
          margin : 'auto',
          border: "1px solid black",
          marginTop: 30,
         
          position: "relative",
        }}
        key={pageIndex}
      >
        {/*
         <Collapse  in={openAlert}>
        <Alert
		autoFocus
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
     Informations stored successfully in the database
        </Alert>
        </Collapse> */}
        

 
           {pageIndex === 0 && (
          <div
            style={{ maxHeight: 400 }}
            ref={(el) => {
              elementRef.current = el;
            }}
          >
           <DisplayId />
          </div>
        )}
              
      
   
        
      
        {page.map((element, index) =>
 
     
         element.type === "headingFirst" ? (
            <div>
              <div>
                <Draggable
                  key={element.id}
                  draggableId={element.id}
                  index={currentIndex++}
                  
                >
                  {(provided) => (
                    <div
                      className="headingsHiearchy"
                      key={element.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
              <TextField
                name="text"
                id="heading level one"
                aria-required="true"
                variant="outlined"
                value={element.text}
                autoFocus
                fullWidth
                className={classes.textZone}
                onChange={(event) => handleChangeInput(element.id, event)}
              
                InputProps={{
                  style: {fontSize: 16, fontWeight:"bold"},
                  startAdornment: (
                    <InputAdornment position="start">
                      <div className="h1" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
               

                      <IconButton tabIndex="0"
                      //aria-label="remove heading level one"
                        className="textfield__icon"
                        //disabled={textZones.length === 1}
                        onClick={() => handleRemoveFields(element.id)}
                        >
                      <DeleteIcon />
                      <span class="sr-only">remove heading level one</span>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              </div>

                    </div>
                  )}
                </Draggable>
              </div>
            </div>
          ) : element.type === "headingSecond" ? (
            <Draggable
              key={element.id}
              draggableId={element.id}
              index={currentIndex++}
            >
              {(provided) => (
                <div
                  className="headingsHiearchy"
                  key={element.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
              <TextField
                name="text"
                id="heading level second"
                aria-required="true"
                variant="outlined"
                value={element.text}
                autoFocus
                fullWidth
                className={classes.textZone}
                onChange={(event) => handleChangeInput(element.id, event)}
               
                InputProps={{
                  style: {fontSize: 13.5, fontWeight:"bold"},
                  startAdornment: (
                    <InputAdornment position="start">
                     <div className="h2" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton tabIndex="0"
                      //aria-label="remove heading level two"
                        className="textfield__icon"
                        onClick={() => handleRemoveheadingSeconds(element.id)}
                        >
                      <DeleteIcon />
                         <span class="sr-only">remove heading level two </span>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

                </div>
              )}
            </Draggable>
          ) : element.type === "headingThirdLevel" ? (
            <Draggable
              key={element.id}
              draggableId={element.id}
             // index={currentIndex++}
            >
              {(provided) => (
                <div
                  className="headingsHiearchy"
                  key={element.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
              <TextField
                name="text"
                id="heading Third second"
                aria-required="true"
                variant="outlined"
                value={element.text}
                autoFocus
                fullWidth
                className={classes.textZone}
                onChange={(event) => handleChangeInput(element.id, event)}
               
                InputProps={{
                  style: {fontSize: 13.5, fontWeight:"bold"},
                  startAdornment: (
                    <InputAdornment position="start">
                     <div className="h3" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton tabIndex="0"
                      //aria-label="remove heading level two"
                        className="textfield__icon"
                        onClick={() => handleRemoveheadingThirds(element.id)}
                        >
                      <DeleteIcon />
                         <span class="sr-only">remove heading third level </span>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

                </div>
              )}
            </Draggable>
          ): element.type === "headingFourthLevel" ? (
            <Draggable
              key={element.id}
              draggableId={element.id}
            //  index={currentIndex++}
            >
              {(provided) => (
                <div
                  className="headingsHiearchy"
                  key={element.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
              <TextField
                name="text"
                id="heading Fourth second"
                aria-required="true"
                variant="outlined"
                value={element.text}
                autoFocus
                fullWidth
                className={classes.textZone}
                onChange={(event) => handleChangeInput(element.id, event)}
               
                InputProps={{
                  style: {fontSize: 13.5, fontStyle:"italic"},
                  startAdornment: (
                    <InputAdornment position="start">
                     <div className="h4" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton tabIndex="0"
                      //aria-label="remove heading level two"
                        className="textfield__icon"
                        onClick={() => handleRemoveheadingFourths(element.id)}
                        >
                      <DeleteIcon />
                         <span class="sr-only">remove heading fourth level </span>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

                </div>
              )}
            </Draggable>
          ): element.type === "editor" ? (
            <Draggable
              key={element.id}
              draggableId={element.id}
              index={currentIndex++}
            >
              {(provided) => (
                <div
                  key={element.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="math">
                    <div className="editor__inside">
                    <Draft
                        count={count}
                        countFoot={countFoot}
                        //saveContent={handleDraftChange}
                        setCount={setCount}
                        setCountFoot={setCountFoot}
                        bibliographys={bibliographys}
                        footnotes={footnotes}
                        setBibliographys={setBibliographys}
                        deleteBibliography={deleteBibliography}
                        setFootnotes={setFootnotes}
                        deleteFootnote={deleteFootnote}
                        editorState={element.editor}
                        id={element.id}
                        handleChangeEditorState={handleChangeEditorState}
                      />
                    </div>
                    <div className="editor__deleteIcon">
                    <IconButton tabIndex="0"
          
            onClick={() => handleRemoveEditor(element.id)}
                  className="textfield__icon"
                  
             
                  >
                <DeleteIcon />
                <span class="sr-only">remove text editor</span>
                </IconButton>

                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ) : element.type === "mathjax" ? (
            <Draggable
              key={element.id}
              draggableId={element.id}
              index={currentIndex++}
            >
              {(provided) => (
                <div
                  className="math"
                  key={element.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                <div className="math_block_inside">
                  <MathJaxFunction
                  element={element}
                  handleMathjaxChange={handleMathjaxChange}
                />

                  </div>
                  <div className="math__deleteIcon">
           
               


           <IconButton tabIndex="0"
            onClick={() => handleRemoveMath(element.id)}
            className="textfield__icon">
            <DeleteIcon />
            <span class="sr-only">remove Math function creator</span>
            </IconButton>
    </div>

                </div>
              )}
            </Draggable>
          ) : element.type === "nestedtable" ? (
            <Draggable
              key={element.id}
              draggableId={element.id}
              index={currentIndex++}
            >
              {(provided) => (
                <div
                  className="math"
                  key={element.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="editor__inside">
                  <NestedDataTable
                      handleAddCell={handleAddCell}
                      element={element}
                      handleEditCellText={handleEditCellText}
                      handleDeleteCell={handleDeleteCell}
                      showTable={Object.keys(element.table).length > 1}
                      handleMakeHeader={handleMakeHeader}
                      isHeader={element.table.isHeader}
                      handleChangeTableCaption={handleChangeTableCaption}
                    />
                  </div>
                  <div className="math__deleteIcon">
                  <IconButton tabIndex="0"
                      onClick={() => handleRemoveTable(element.id)}
                      className="textfield__icon">
                      <DeleteIcon />
                      <span class="sr-only">remove table creator</span>
                      </IconButton>

                  </div>
                </div>
              )}
            </Draggable>
          ) : element.type === "image" ? (
            <Draggable
              key={element.id}
              draggableId={element.id}
              index={currentIndex++}
            >
              {(provided) => (
                <div
                  className="image__block"
                  key={element.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                <div className="image__block_inside">
                    <Image
                      name="text"
                      element={element}
                      handleImageChange={handleImageChange}
                      handleChangeImageCaption={handleChangeImageCaption}
                      handleChangeImageAlt={handleChangeImageAlt}
                    />
                  </div>
                  <div className="image__deleteIcon">
              

              <IconButton tabIndex="0"
                      onClick={() => handleRemoveImage(element.id)}
                     className="textfield__icon">
                     <DeleteIcon />
                     <span class="sr-only">remove image creator  </span>
                     </IconButton>
             </div>

                </div>
              )}
            </Draggable>
          ) : (
            <div>
             
            </div>
          )
          
        )}



        
        <div style={{ position: "absolute", bottom: "20px" }}>
          {footnotes
            .filter((note) => {
              const element = renderPages()[pageIndex].find(
                (element) => element.type === "editor"
              );
              if (element) {
                if (element.id === note.editorId) {
                  return note;
                }
              }
              return null;
            })
            .map((footnote) => (
              <div key={footnote.id} className="bibliographyList">
                <div className="bibliography-text">
                  {footnote.id === footnoteEditing ? (
                    <input
                      type="text"
                      onChange={(e) => setEditingTextFoot(e.target.value)}
                      defaultValue={footnote.text}
                    />
                  ) : (
                    <p
                      style={{ marginBottom: 5, marginTop: 5 }}
                      key={footnote.key}
                      id={footnote.id}
                    >
                      {footnotes.findIndex((note) => note.id === footnote.id) +
                        1}
                      . {footnote.text}
                    </p>
                  )}
                </div>
                <div className="bibliography-actions">
                  {footnote.id === footnoteEditing ? (
                    <Check onClick={() => submitEditsFoot(footnote.id)}>
                      Submit Edit
                    </Check>
                  ) : (
                    <Create onClick={() => setFootnoteEditing(footnote.id)}>
                      Edit
                    </Create>
                  )}
           {/*       <Delete onClick={() => deleteFootnote(footnote.id)}></Delete> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    ));
  };
  return (
    <Box>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow:0 }}>
    <ul class="skip-links">

<li><a href="#maincontent">Skip to the main content</a></li>
</ul>
         <NavBarNew />
             {message ?  
 <Alert variant="success" autoFocus>Informations stored successfully in the database</Alert>
     : (
  <div></div>
)
 }
      </AppBar>

    <Box  sx={{ display: "flex" }}>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

    
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{
          
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
    
    
        
      </AppBar>
 
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
       
      >
      
 
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              flexShrink: 0,
             /* boxSizing: "border-box",*/
              width: drawerWidth,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    
      <Box id="maincontent" /*component="main" */sx={{ flexGrow: 1, p: 3, /*border: '1px solid grey', height :'1056px'*/ }}>
      <main  id="maincontent">
 

        <Toolbar  InputProps={{}} />
     
  
    <DragDropContext onDragEnd={handleOnDragEnd}>
  
          <Droppable droppableId="characters">
            {(provided) => (
              <div
                className="elementsBox"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {renderContent()}

                <div></div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div>
          {" "}
          
          <div>
            <h3>References</h3>
            <ol>
              {bibliographys.map((bibliography) => (
                <div key={bibliography.id} className="bibliographyList">
                  <div className="bibliography-text">
                    {bibliography.id === bibliographyEditing ? (
                      <input
                        type="text"
                        onChange={(e) => setEditingText(e.target.value)}
                        defaultValue={bibliography.text}
                      />
                    ) : (
                      <li key={bibliography.key} id={bibliography.id}>
                        {bibliography.text}
                      </li>
                    )}
                  </div>
                  <div className="bibliography-actions">
                    {bibliography.id === bibliographyEditing ? (
                      <Check onClick={() => submitEdits(bibliography.id)}>
                        Submit Edit
                      </Check>
                    ) : (
                      <Create
                        onClick={() => setBibliographyEditing(bibliography.id)}
                      >
                        Edit
                      </Create>
                    )}
             {/*       <Delete
                      onClick={() => deleteBibliography(bibliography.id)}
             ></Delete> */}
                  </div>
                </div>
              ))}
            </ol>
          </div>
            
        </div>
        </main>
      </Box>
    </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default ResponsiveDrawer;