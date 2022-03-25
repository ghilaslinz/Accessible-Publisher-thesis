
/*
import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from "@material-ui/core";
import {Box} from "@material-ui/core";
import {CssBaseline} from "@material-ui/core";
import {Divider}  from "@material-ui/core";
import {Drawer} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {List} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {ListItemIcon} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {Toolbar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
*/

import React, {useState} from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import FunctionsIcon from '@mui/icons-material/Functions';

import './Sidebar.css'
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ImageIcon from '@material-ui/icons/Image';
import CodeIcon from '@material-ui/icons/Code';
import TableChartIcon from '@material-ui/icons/TableChart';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import { InputAdornment } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import { ExpandMore } from '@material-ui/icons';
import TitleIcon from '@material-ui/icons/Title';
import ShortTextIcon from '@material-ui/icons/ShortText';
import RichEditorExample from './Editor';
import MathJaxFunction from './MathJaxFunction';
import Image from './Image'
import NestedDataTable  from './NestedDataTable';
import { Flag } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

import MathKatex from './MathKatex';
import EditorConvertToHTML from "./Drafts";
import Draft from "./Draft";
import Todo from "./Todo";
import { ContentState, EditorState } from "draft-js";
import Button from '@mui/material/Button';
import { db } from "./firebase";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "./contexts/AuthContext"
import { useStateValue } from "./StateProvider";
//import Todo from './Todo';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiInput-input'
: {
fontSize : 35
}      },
  textZone: {
   color: 'green',
    width: '70vw',
   
  marginBottom : '5px',
  
   
    
   

  
 
  },
  button: {
    margin : '5px',
  },
  abouche: {
   
    /* border: '1px solid #e2e2e1',*/
    // overflow: 'hidden',
     /*borderRadius: 4,*/
    // backgroundColor: '#fcfcfb',
     fontSize:16,
     fontWeight: 'bold',
    
     
    

     margin : '5px',
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


}))

const useStylesReddit = makeStyles((theme) => ({

  root: {
   
   /* border: '1px solid #e2e2e1',*/
   // overflow: 'hidden',
    /*borderRadius: 4,*/
   // backgroundColor: '#fcfcfb',
    fontSize:16,
    fontWeight: 'bold',
   
    
   

    margin : '5px',
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
    fontWeight: 'bold',
    width: '500px',
   
    margin : '5px',
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
  const classes =  useStylesReddit();

  return <TextField 
 // InputProps={{classes}}
   {...props}
    />;
}



function TwoTextField(props) {
  const classes = useStylesReddit();

  return <TextField InputProps={{ classes, disableUnderline: false,  
     startAdornment: (
    <InputAdornment position="start">
      <h2 />
    </InputAdornment>
  ),  }} {...props} />;
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {currentUser} = useAuth();
  const classe =  useStylesReddit();
      const classes = useStyles()
      const [flag, setFlag] = useState(false);
      const [elements, setElements] = useState([]);
      const [dataImage, setdataImages] = useState([]);
      const [elementsRef, setElementsRef] = useState([]);
      const [counter, setCounter] = useState(0);

      const [counterRef, setCounterRef] = useState("false");
      const [editorState, setEditorState] = useState(EditorState.createEmpty());
      const [loader, setLoader] = useState(false);
          const [headingFirsts, setheadingFirsts] = useState();

          const [headingSeconds, setheadingSeconds] = useState([
            {  id: uuidv4(), headingSecond: '' },
          ]);
          const [imageZones, setImageZones] = useState([
            {  id: uuidv4(), image: '' },
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
  if(/^\s/.test(event.target.value)){
    return
  }else{
  const newElements = elements.map((i) => {
    if (id === i.id ) {
      i[event.target.name] = event.target.value;
      
       
    }
    return i;
  });
  setElements(newElements);
  }
  
};
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

  setElements([...elements, {id: uuidv4(), headingFirst: "", type: "headingFirst"}]);
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
    setElements([...elements, {id: uuidv4(), headingSecond: "", type: "headingSecond"}]);
  }
};

const handleRemoveheadingSeconds = (id) => {
  const values = [...elements];
  const filteredValues = values.filter((value) => value.id !== id);
  setElements(filteredValues);
};



const handleAddEditor = () => {
  
    setElements([...elements, {id: uuidv4(), editor: "", type: "editor"}]);
    setCounterRef("true")
};

const handleAddReference = () => {
  if(counterRef === "true"){
  setElementsRef([...elementsRef, {id: uuidv4(), editor: "", type: "reference"}]);
 
}
};

const handleAddTodoText = () => {
  const totalText = `number of reference`
  const content = ContentState.createFromText(totalText);
  setEditorState(EditorState.createWithContent(content));
};


const handleAddMathjax = () => {
  
  setElements([...elements, {id: uuidv4(), editor: "", type: "mathjax"}]);
 

};

const handleAddMathkatex = () => {
  
  setElements([...elements, {id: uuidv4(), editor: "", type: "mathkatex"}]);
 

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

/*
          const handleRemoveheadingSeconds = (id) => {
            const values = [...headingSeconds];
            const filteredValues = values.filter((value) => value.id !== id);
            setheadingSeconds(filteredValues);
          };
*/

/*
          const handleAddImage = () => {
            console.log('coucou')
           setFlag('false')
           console.log(flag)
            setImageZones([
              ...imageZones,
                {   id: uuidv4(),image: ""},
              ]);
             
            };
        */
       
            const handleAddImage = () => {
              setElements([...elements, {id: uuidv4(), image: "", type: "image"}]);
            };
      

            const handleAddNestedTable = () => {
              setElements([...elements, {id: uuidv4(), table: "", type: "nestedtable"}]);
            };

            
          
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   
    setLoader(true);
  
    db.collection('users')
    .doc(currentUser?.uid)
    .collection('databases')
    .doc()
      .set({
        id: uuidv4(),
        elements : elements
      //  headingFirsts: elements.headingFirst,
        //headingSeconds : headingSecond,
       /* keyword: keyword,
        abstract:  abstract,*/
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
  
   /* setTitle("");
    setKeyword("");
    setAbstract("");
   
    setInputFields([ { id: uuidv4(),  author: '', university: '', email: '' }])*/
  
  
 
  
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <div className="">
         
         <div className="">


         <Button
         // className={classes.button}
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
         <ListItem button onClick={handleAddFields}>
            <ListItemIcon>
            <TextFieldsIcon fontSize="large"
          
      
          />
            </ListItemIcon>
            <ListItemText   primary="heading One"  />
          </ListItem>
         

          <ListItem button onClick={handleAddheadingSeconds} >
            <ListItemIcon>
            <TextFieldsIcon fontSize="large"
          
      
          />
            </ListItemIcon>
            <ListItemText   primary="heading Second"  disabled={counter===0}   />
          </ListItem>
         


          <ListItem button onClick={handleAddEditor} >
            <ListItemIcon>
            <ShortTextIcon fontSize="large" 
              />
            </ListItemIcon>
            <ListItemText   primary="Textarea"  />
          </ListItem>
        
          <ListItem
              button
              onClick={handleAddReference}
              disabled={
                elementsRef.find((elementRef) => elementRef.type === "reference") ||
                !elements.find((element) => element.type === "editor")
              }
            >
              <ListItemIcon>
                <ShortTextIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText secondary="Reference" />
            </ListItem>


          <ListItem button onClick={handleAddImage } >
            <ListItemIcon>
            <ImageIcon fontSize="large"
                 
                  />
            </ListItemIcon>
            <ListItemText   primary="upload image"    />
          </ListItem>


          <ListItem button onClick={handleAddMathjax } >
          <ListItemIcon>
           {/* <FunctionsIcon fontSize="large"
                 
                  />*/}
            </ListItemIcon> 
            <ListItemText   primary="Add Math function with MathJax"    />
          </ListItem>

          <ListItem button onClick={handleAddMathkatex } >
          <ListItemIcon>
           {/* <FunctionsIcon fontSize="large"
                 
                />*/}
            </ListItemIcon>
            <ListItemText   primary="Add Math function with MathKatex"    />
          </ListItem>


          <ListItem button onClick={handleAddNestedTable } >
          <ListItemIcon>
            <TableChartIcon fontSize="large"
                 
                  />
                  
            </ListItemIcon>
            <ListItemText   primary="Create table"    />
          </ListItem>

          
 
        </div>
       
    
  
       
    
        </div>
        {/*['Heading One', 'Heading Two', 'TextArea', 'Image'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>

              {index % 2 === 0 ? <TextFieldsIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))*/}
      </List>
      <Divider />
      {/*
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
        */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
       
        
        
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
       <Typography variant="h6" noWrap component="div">
            
      </Typography>

      <Button  secondary variant="outlined">Primary</Button>
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />


        {elements.map((element) =>
       
       element.type === "headingFirst" ? (
        
         <div className="headingsHiearchy" key={element.id}>
{/*            
           <TextField
           
 //  label="Reddit"
  // className={classes.margin}
  // defaultValue="react-reddit"
   variant="outlined"
   id="headingOne"
   fullWidth
  className={classes.textZone}
 // value={element.headingFirst}
   onChange={(event) => handleChangeInput(element.id, event)}
   
   InputProps={{
     startAdornment: (
       <InputAdornment position="start">
         <h1 />
       </InputAdornment>
     ),
     endAdornment: (
       <InputAdornment position="end">
         <DeleteIcon
           //disabled={textZones.length === 1}
           onClick={() => handleRemoveFields(element.id)}
         ></DeleteIcon>
       </InputAdornment>
     ),
   }}
    
         //disabled={textZones.length === 1}
       
      
 
  
  
 />
 */}
           <TextField
             name="headingFirst"
             id="headingOne"
             
             aria-required="true"
             variant="outlined"
             value={element.headingFirst}
             multiline
             fullWidth
             className={classes.textZone}
             onChange={(event) => handleChangeInput(element.id, event)}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <h1 />
                 </InputAdornment>
               ),
               endAdornment: (
                 <InputAdornment position="end">
                   <DeleteIcon className="textfield__icon"
                     //disabled={textZones.length === 1}
                     onClick={() => handleRemoveFields(element.id)}
                   ></DeleteIcon>
                 </InputAdornment>
               ),
             }}
           />

           
         </div>
       ) : element.type === "headingSecond" ? (
         <div className="headingsHiearchy" key={element.id}>


           <TextField
             name="headingSecond"
             id="headingSecond"
             aria-required="true"
             variant="outlined"
             value={element.headingSecond}
             multiline
             fullWidth
             className={classes.textZone}
             onChange={(event) => handleChangeInput(element.id, event)}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <h2 />
                 </InputAdornment>
               ),
               endAdornment: (
                 <InputAdornment position="end">
                   <DeleteIcon className="textfield__icon" onClick={() => handleRemoveheadingSeconds(element.id)}></DeleteIcon>
                 </InputAdornment>
               ),
             }}
           />
         </div>
       ) : element.type === "editor" ? (
         <div className="editor" key={element.id}>
             <div className="editor__inside">
             <Draft editorState={editorState} />
           {/* <RichEditorExample /> 
           <import EditorConvertToHTML from "./Drafts"; editorState={editorState}  /> */}
                  </div>
                   <div className="editor__deleteIcon">
                  <DeleteIcon onClick={() => handleRemoveEditor(element.id)}></DeleteIcon>
               </div>
         </div>
       )  :  element.type === "mathjax" ?(

      
       <div className="math" key={element.id}>
           <div className="editor__inside">
          <MathJaxFunction 
          setElements={setElements}/>
                </div>
                 <div className="math__deleteIcon">
                <DeleteIcon onClick={() => handleRemoveEditor(element.id)}></DeleteIcon>
             </div>
       </div>
      
     ) :  element.type === "mathkatex" ?(

      
      <div className="math" key={element.id}>
          <div className="editor__inside">
         <MathKatex />
               </div>
                <div className="math__deleteIcon">
               <DeleteIcon onClick={() => handleRemoveEditor(element.id)}></DeleteIcon>
            </div>
      </div>
     
    ) :  element.type === "nestedtable" ?(

      
      <div className="math" key={element.id}>
          <div className="editor__inside">
         <NestedDataTable />
               </div>
                <div className="math__deleteIcon">
               <DeleteIcon onClick={() => handleRemoveTable(element.id)}></DeleteIcon>
            </div>
      </div>
     
    ) :  element.type === "image" ?(
         <div className="image__block" key={element.id}>
           <div className="image__button"> 
           <Image
           
             name="image" 
          
            
           />
           </div>
           <div className="image__deleteIcon">
                 
                   <DeleteIcon    onClick={() => handleRemoveImage(element.id)}/>
                 
           </div>
         </div>
       ):(
       <div>
         </div>
     ))}

{elementsRef.map((elementRef) =>
       
       elementRef.type === "reference" ?(

counterRef === "true" ? (
 <div className="editor" key={elementRef.id}>
   <div className="editor__inside">
     <Todo handleAddTodoText={handleAddTodoText} />
   </div>
   <div className="editor__deleteIcon">
     <DeleteIcon
       onClick={() => handleRemoveReference(elementRef.id)}
     ></DeleteIcon>
   </div>
 </div>
) : (
     <div></div>
     )
):(
  <div></div>
) )}
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
