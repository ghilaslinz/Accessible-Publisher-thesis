import React, { useState } from 'react'
import { InlineMath, BlockMath } from 'react-katex';
import SaveIcon from '@material-ui/icons/Save';
import UpdateIcon from '@material-ui/icons/Update';
import 'katex/dist/katex.min.css';
import './MathKatex.css'
function MathKatex() {
  const [elements, setElements] = useState([]);
  const [show, setShow] = useState(true);

  
  function handleInputChange(event){
    setElements(event.target.value);
   // console.log(event.target.value);
  }
 //  \int_0^\infty x^2 dx
  console.log(elements)
function hideInput(){
setShow(false);
console.log('hide')
}
function showInput(){
  setShow(true);
  console.log('show')
  }


 
  return (
    <div>
      {show ? 
      <div className="FirstRendering">
        <div className="InputUndResult">
      <textarea  rows="5" className="inputMath" id="inputMath" name='element' value={elements}  onChange={(event) => handleInputChange(event)}></textarea>
      <div input="resultMath"  > <BlockMath   >{elements}
      </BlockMath>
       </div>
       </div>
       <div className="saveIcon">
       <SaveIcon onClick={hideInput}></SaveIcon>
       </div>
       </div>
      :
      <div className="secondRendering">
     
         <BlockMath  errorColor={'#cc0000'}>{elements}</BlockMath>
         <span className="mathKatexNumber">  </span>
     <div className="UpdateIcon">
     <UpdateIcon onClick={showInput}/>
     </div>
     </div>
    }
    </div>
  )
}

export default MathKatex;
