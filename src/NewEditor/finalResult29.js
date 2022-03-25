import React, { useState, useEffect, useMemo} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import './Pagination.css'
import { useStateValue } from "../StateProvider";
import { useAuth } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import MathJax from "react-mathjax";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
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
import NavbarNew from '../components/NavBarNew'
//import '../components/skip.css'
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
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
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
  paper: {
    width: '100%',
    height: '500px',
  
  },
  button: {
    margin: "5px",
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
 
	const TITLE = 'Accessible Publisher : Editor'
  const [dbId, setDBId] = useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const {currentUser} = useAuth();
  const classe = useStylesReddit();
  const classes = useStyles();
  const [flag, setFlag] = useState(false);
  const [elements, setElements] = useState([]);
  const [dataImage, setdataImages] = useState([]);
  const [elementsRef, setElementsRef] = useState([]);
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(1);
  const [bibliographys, setBibliographys] = useState([]);
  const [bibliographyEditing, setBibliographyEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [counterRef, setCounterRef] = useState("false");
  const [  editorData, setEditorData] = useState([]);

  const [loader, setLoader] = useState(false);
  const [headingFirsts, setheadingFirsts] = useState();

  const [headingSeconds, setheadingSeconds] = useState([
    { id: uuidv4(), headingSecond: "" },
  ]);

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

  const handleAddEditor = () => {
    setElements([...elements, { id: uuidv4(), editor: "", type: "editor" }]);
    setCounterRef("true");
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

  const handleChangeTableCaption = (event, id) => {
    const elementIndex = elements.findIndex((element) => element.id === id);

    const element = elements[elementIndex];

    element.tableCaption = event.target.value;

    const newElements = [...elements];

    newElements[elementIndex] = element;

    setElements(newElements);
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
          setElements(d.elements)
          setDBId(d.id);
          setLoading(false);
        });
      } else {
        setDatabases({});
        console.log("erreur ");
      }
      }
      getDatafromDatabse();
    }, []);
   console.log("this is editor data" +editorData)
    
     
  return (
  <div className="result">
 
  
    <div>
    
    </div>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <ul class="skip-links">

<li><a href="#maincontent">Skip to the main content</a></li>
</ul>
      {/*   <NavBarNew />*/}
       
      </AppBar>

    <Box  sx={{ display: "flex" }}>
      	<Helmet>
          <title>{ TITLE }</title>
        </Helmet>

		
      <CssBaseline />
      
    
     
  
      <Box  >
 
     
        <Toolbar />
    <div > 
        <div   >  {database.id && (
			<div  key={database.id}>
			<h1 className="title">  {database.title} </h1>
  
			  <div    className="author_container">
				{database.inputFields.map((inputField, index) => (
				  <div key={inputField.id}>
					<div className="author">
					  {inputField.author}
					  <sup>
						{universitySet.findIndex(
						  (uni) => uni.university === inputField.university
						) + 1}
					  </sup>
					  ,{" "}
					</div>
				  </div>
				))}
			  </div>
        

        <div>
				{database.elements.map((element, index) => (
				  <div key={element.id}>

				  </div>
				))}
          </div>
			  <div    className="author_container">
				{database.inputFields
				  .filter((item, index) => {
					return (
					  database.inputFields.findIndex(
						(field) => field.university === item.university
					  ) === index
					);
				  })
				  .map((inputField, index) => (
					<div key={inputField.id}>
					  <div  className="university">
						<sup>{index + 1}</sup>
						{inputField.university},{" "}
					  </div>
					</div>
				  ))}
			  </div>
  
			  <div   className="email_container">
				{database.inputFields.map((inputField) => (
				  <div key={inputField.id}>
					<div   className="email">{inputField.email}, </div>
				  </div>
				))}
			  </div>
  
			  <div className="abstract"><span className="abstractText">Abstact:</span> { database.abstract}</div>
  
			  <div   className="keyword"><span className="abstractText">Keywords:</span>{ database.keyword}</div>
			</div>
		  )} </div>


    
 
   

          
        



       
      
     
      <div  className="elementsBox" >
    


        {elements.map((element, index) =>

          element.type === "headingFirst" ? (
            <div>
            <div>
         
           
     
             
			  <span className="h1" style={{fontSize: "16px", fontWeight:"bold"}}>	 {element.text}   </span>
             
             
    
           
               </div>
               </div>
          ) : element.type === "headingSecond" ? (
           
         <div>
              
			
			  <span className="h2"  style={{fontSize: "13.5px", fontWeight:"bold"}} >	 {element.text}   </span>
	
            </div>
                  
          ) :element.type === "editor" ? (
           
                   <div key={element.id} >
          
              <div >
              <Draft
                  count={count}
                  //saveContent={handleDraftChange}
                  setCount={setCount}
                  bibliographys={bibliographys}
                  setBibliographys={setBibliographys}
                  deleteBibliography={deleteBibliography}
                  editorState={element.editor}
                  id={element.id}
                  handleChangeEditorState={handleChangeEditorState}
                />
              </div>
             
            
            </div>
        

          ): element.type === "mathjax" ? (
           
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
                 // handleAddCell={handleAddCell}
                  element={element}
               //   handleEditCellText={handleEditCellText}
               //   handleDeleteCell={handleDeleteCell}
                  showTable={Object.keys(element.table).length > 0}
                  handleChangeTableCaption={handleChangeTableCaption}
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
            <div></div>
          )
        )}


        <div></div>
       
        </div>
       
          
      
        
      
		<div>


<div>
<h4>References</h4>

{database.id && (
			<ol key={database.id}>
				
	{database.bibliographys.map((bibliography) => (
				  

					
						<li key={bibliography.id}>
							{bibliography.text}
						
						</li> 
			
				  
				))}
					

</ol>

				)}

</div>

</div>

      
       <div>
  

{/*
       <div id="long-content"> 
        The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. RackhamThe standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
</div>
*/}

</div>
       </div>
      </Box>
          
            
      
    </Box>





   
   
    </div>


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