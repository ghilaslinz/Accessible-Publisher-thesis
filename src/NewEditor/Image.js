/*
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

function Image() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      

   const uploadImage = () =>{
       console.log("hello")

   }
    return (
        <div>
           <button onClick={uploadImage}>add image</button> 
           <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Upload with an URL" value="1" />
            <Tab label="Upload from computer" value="2" />
           
          </TabList>
        </AppBar>
        <TabPanel value="1">  <form>
           <input 
      //  value={imageUrl}
     //   onChange={(e) =>  setImageUrl(e.target.value)}
         placeholder={'Enter the link of your image'}
          />

           </form></TabPanel>
        <TabPanel value="2"> <button>
               Upload image
           </button></TabPanel>
        
      </TabContext>
         

          
        </div>
    )
}

export default Image
*/
import React from "react";
import ImageUploading from "react-images-uploading";
import "./Image.css";
//import "./styles.css";

function Image(props) {
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    const image = imageList[0];
    props.handleImageChange(image.file, image.data_url, props.element.id);
  };

  /*
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
*/

  //console.log(images)

  return (
    <div className="image_zone">
      <ImageUploading
        multiple
        value={
          props.element.image
            ? [
                {
                  data_url: props.element.image,
                  file: props.element.imageFile,
                },
              ]
            : []
        }
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI

          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              aria-label="Click or Drop here"
            >
              Click or Drop here
            </button>
            &nbsp;
            {/*  <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img
                width="300"
                height="300"
                  className="img-result"
                  src={image.data_url}
                  alt=""
                  onClick={() => onImageUpdate(index)}
                />

                <div className="image__caption">
                  {" "}
                  <figcaption>
                    <input
                      aria-label="figcaption"
                      onChange={(event) =>
                        props.handleChangeImageCaption(event, props.element.id)
                    
                      }
                      defaultValue={props.element.caption}
                   
                    />
                  </figcaption>

                  
                </div>

                <div className="image__caption">
                  <span>
                  Alt text :
                <input
                // placeholder="enter Alternative text here"
                      aria-label="alt"
                      onChange={(event) =>
                        props.handleChangeImageAlt(event, props.element.id)
                    
                      }
                      defaultValue={props.element.alt}
                   
                    />
                    </span>
                  </div>

                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} aria-label="update image">
                    Update Image
                  </button>
                  {/* <button onClick={() => onImageRemove(index)  }>Remove</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      {/*  <button onClick={() => setElements(images)}></button> */}
    </div>
  );
}
export default Image;
