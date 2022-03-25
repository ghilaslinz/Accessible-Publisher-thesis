import React, {useState} from 'react'
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
import { IconButton } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { InputAdornment } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import { ExpandMore } from '@material-ui/icons';
import TitleIcon from '@material-ui/icons/Title';
import ShortTextIcon from '@material-ui/icons/ShortText';
import MyEditor from './MyEditor';
import Editor from './Editor';
import Image from './Image'
import { Flag } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
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
        width: '500px',
       
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
    
    
  
      
function Sidebar() {
  const classe =  useStylesReddit();
      const classes = useStyles()
      const [flag, setFlag] = useState(false);
      const [elements, setElements] = useState([]);
      const [counter, setCounter] = useState(0);
    
          const [headingFirsts, setheadingFirsts] = useState([
            {  id: uuidv4(), headingFirst: '' },
          ]);

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
  
};

const handleRemoveEditor = (id) => {
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
      
          
    return (

     

        <div className="project">
        
               <div className="sidebar">
         
     <div className="sidebar__option">
      <button className="sidebar__button" onClick={handleAddFields}>
          <TextFieldsIcon fontSize="large"
          
           
        />
       <h3> Heading1</h3>
     </button> 
     
     
    </div>
    <div className="sidebar__option">
       <button className="sidebar__button" disabled={counter===0}  onClick={handleAddheadingSeconds}><TitleIcon fontSize="large"
       
       
      
        
     />
     
      <h3> Heading2</h3>
     </button>
       
  
 </div>

    <div className="sidebar__option">
    <button className="sidebar__button" onClick={handleAddEditor}>  <ShortTextIcon fontSize="large"
              />
              <h3> Textarea</h3>
    </button>
       
    </div>

   

    <div className="sidebar__option">
    <button className="sidebar__button"  onClick={handleAddImage } >   <ImageIcon fontSize="large"
                 
                  />
                   <h3> Image</h3>
    </button>   
    </div>
    </div>
{/*
    <div className="sidebar__option">
          <CodeIcon fontSize="large" />
    </div>

    <div className="sidebar__option">
          <TableChartIcon fontSize="large"/>
    </div>
*/}
    <div>
          </div>
      
          
<div className="feed">
       <div className="headingOne">
            
       {elements.map((element) =>
       
            element.type === "headingFirst" ? (
             
              <div key={element.id}>
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
              <div key={element.id}>


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
                    <Editor
                  

                        />
                       </div>
                        <div className="editor__deleteIcon">
                       <DeleteIcon onClick={() => handleRemoveEditor(element.id)}></DeleteIcon>
                    </div>
              </div>
            ) : (
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
            ),
          )}
      {/*       
    { headingFirsts.map(headingFirst => (
          <div key={headingFirst.id}>
          
            <TextField
            
              name="headingFirst"
             
          aria-required="true"
              variant="outlined"
              value={headingFirst.headingFirst}
              multiline
              fullWidth
             className={classes.textZone}
             
               onChange={event => handleChangeInput(headingFirst.id, event)}
              
              InputProps={{
                startAdornment: <InputAdornment position="start"><h1/></InputAdornment>,
                  endAdornment: (
                    <InputAdornment position="end">
                         <DeleteIcon 
             //disabled={textZones.length === 1} 
            onClick={() => handleRemoveFields(headingFirst.id)}
           >
              
             
            </DeleteIcon>
                    </InputAdornment>
                  )

                  
                }}
               
            />
          
        

     
     
          </div>
        )) }
        */}
       </div>


       <div className="headingTwo">         
    
       </div>

 
           
           
    </div>
  
     
        </div>

 )
  
}

export default Sidebar;
