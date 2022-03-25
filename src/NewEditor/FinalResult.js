import React, { useState, useEffect, useMemo, useRef,  useCallback,} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import { useStateValue } from "../StateProvider";
import { useAuth } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MathJax from "react-mathjax";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ReactDOMServer from 'react-dom/server';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Draft from './DraftResult'
import FunctionsIcon from '@mui/icons-material/Functions';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import $ from 'jquery';
import Paper from '@mui/material/Paper';

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

import { InputAdornment } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import { ExpandMore } from "@material-ui/icons";
import TitleIcon from "@material-ui/icons/Title";
import ShortTextIcon from "@material-ui/icons/ShortText";

import '../components/skip.css'
import MathJaxFunction from "./MathJaxFunction";
import Image from "./Image";
import NestedDataTable from "./NestedDataTableResult";
import { Flag } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Button from "@mui/material/Button";
import { db, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { Check, Create, Delete } from "@mui/icons-material";
import "./Sidebar.css";
import NavBarNew from "../components/NavBarNew";
import { Helmet } from 'react-helmet'
import { EditorState } from "draft-js";
import DisplayId from "./DisplayId";


const drawerWidth = 240;
const heights = {

  IMAGE: 350,
  HEADER: 62,
  MATH: 186,
//  EDITOR: 100,
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
    width: "70vw",
  

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

 
function FinalResult(props) {
 


  const history = useHistory();
	const { id } = useParams();
	const [database, setDatabases] = useState({});
	const [universitySet, setUniversitySet] = useState([]);
	const [loading, setLoading] = useState(false);
	const { currentUser } = useAuth();
 
	const TITLE = 'Accessible Publisher : Editor'
  const [dbId, setDBId] = useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const {currentUser} = useAuth();
  const classe = useStylesReddit();
  const classes = useStyles();
  const [flag, setFlag] = useState(false);
  const [ok, setOk] = useState("true");
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
  useEffect(() => {
    setFirstPageItemHeight(elementRef?.current?.clientHeight || 0);
  });
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
/*
  function handleAddHaut(){
   

    setElements([
      ...elements,
      { id: uuidv4(), text: "", type: "haut" },
    ]);
  };

*/
const downloadHTML = useCallback(() => {
  const element = document.documentElement;
  const buttonEl = element.querySelector("#save-html-button");
  const buttonbar = element.querySelector("#navbar");
  const buttonskip = element.querySelector("#skip");
  
  console.log(buttonEl);
  buttonEl.remove();
  buttonbar.remove();
  buttonskip.remove();
  const content = element.innerHTML;
  const blob = new Blob([content], { type: "html" });
  downloadBlob(blob, `page.html`);
  document
    .querySelector("#toolbar-main")
    .insertAdjacentElement("afterend", buttonskip)
    .insertAdjacentElement("afterend", buttonbar)
    .insertAdjacentElement("afterend", buttonEl);
    
}, []);

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

const transformtohtml = () =>{

 //console.log( ReactDOMServer.renderToString(elements));
// console.log(  ReactDOMServer.renderToStaticMarkup(elements));
console.log('hello')
saveAs(
 // "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
 "./Sidebar.css",
 // "example.pdf"
);
 //console.log(elements);
}
/*
const saveFile = () => {
 
};
*/
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

  function deleteBibliography(id) {
    let updatedBibliographys = [...bibliographys].filter(
      (bibliography) => bibliography.id !== id
    );
    setBibliographys(updatedBibliographys);
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
    setElements(filteredValues);
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
      { id: uuidv4(), table: {}, type: "nestedtable" },
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

    const elementsClone = [...elements];

    for (let i = 0; i < elementsClone.length; i++) {
      const element = elementsClone[i];

      if (element.type === "image" && element.image && element.imageFile) {
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
        alert("Your informations has been submitted👍");
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
      
    
      case "headingFirst": {
        return heights.HEADER;
      }
      case "headingSecond": {
        return heights.HEADER;
      }
      case "image": {
        return heights.IMAGE;
      }
      /*
      case "editor": {
        return heights.EDITOR;
      }
      */
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
          paddingRight:30,
          height: 1056,
          width: 816,
          margin : 'auto',
          border: "1px solid black",
         
          marginTop: 20,
         
      
          position: "relative",
        }}
        key={pageIndex}
      >
       
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
             	  <span className="h1" style={{fontSize: "16px", fontWeight:"bold"}}>	 {element.text}   </span>
            </div>
          ) : element.type === "headingSecond" ? (
            <div>
            <span className="h2"  style={{fontSize: "13.5px", fontWeight:"bold"}} >	 {element.text}   </span>

            </div>
          ) : element.type === "headingThirdLevel" ? (
            
            <span className="h3"  style={{fontSize: "13.5px", fontWeight:"bold"}} >	 {element.text}   </span>

           
          ): element.type === "headingFourthLevel" ? (
            
            <span className="h4"  style={{fontSize: "13.5px", fontStyle:"italic"}} >	 {element.text}   </span>

           
          )  : element.type === "editor" ? (
            <span key={element.id} >
          
            
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
          
           
          
          </span>
          ) : element.type === "mathjax" ? (
            <div className="secondRenderingResult">
            <div>
              <MathJax.Provider>
                {" "}
                <MathJax.Node formula={element.text} />{" "}
              </MathJax.Provider>
            </div>
            <span className="mathKatexNumber"> </span>
         
          </div>
          ) : element.type === "nestedtable" ? (
            <div  key={element.id}  >
            <div className="editor__inside">
    
<NestedDataTable
                  //    handleAddCell={handleAddCell}
                      element={element}
                   //   handleEditCellText={handleEditCellText}
                   //   handleDeleteCell={handleDeleteCell}
                      showTable={Object.keys(element.table).length > 1}
                      handleMakeHeader={handleMakeHeader}
                      isHeader={element.table.isHeader}
                    />
            </div>
        
          </div>
          ) : element.type === "image" ? (
            <figure className="image">
				  	<img style={{maxWidth:300 }} src={element.image}/>
			  <figcaption>
			  

                     {element.caption}
                   
                   
                  </figcaption>

              </figure>
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
                      style={{ marginBottom: 0, marginTop: 5 }}
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
                  <Delete onClick={() => deleteFootnote(footnote.id)}></Delete>
                </div>
              </div>
            ))}
        </div>
      </div>
    ))
  
  };
 
  return (
    <Box>


    <Box  sx={{ display: "flex" }}>
       
     
    
    
      <Box  /*component="main"*/ sx={{ flexGrow: 1, p: 3, /*border: '1px solid grey', height :'1056px'*/ }}>
 
    
      <Toolbar id="toolbar-main" />
      <ul class="skip-links" id="skip">

<li><a href="#maincontent">Skip to the main content</a></li>
</ul>
  <div id="navbar">   <NavBarNew  /></div> 
  <main  id="maincontent">
    <button onClick={downloadHTML} aria-label="save document as html" id="save-html-button">Save as HTML</button> 
    

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

        
          {" "}
          
          <div className="bibliography__parent">
            <div className="bibliography__child">
            <h3>References </h3>
            <ol className="bib">
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



export default FinalResult;