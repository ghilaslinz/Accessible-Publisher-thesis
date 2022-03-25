import React, { useState } from "react";
import MathJax from "react-mathjax";
import SaveIcon from "@material-ui/icons/Save";
import UpdateIcon from "@material-ui/icons/Update";

import "./MathKatex.css";
function MathJaxFunction(props) {
  const [show, setShow] = useState(true);

  //  \int_0^\infty x^2 dx
  function hideInput() {
    setShow(false);
    console.log("hide");
  }
  function showInput() {
    setShow(true);
    console.log("show");
  }

  console.log(props);

  return (
    <div>
      {show ? (
        <div className="FirstRendering">
          <div className="InputUndResult">
            <textarea
              rows="5"
              className="inputMath"
              id="inputMath"
              name="element"
              defaultValue={props.element.text}
              onChange={(event) =>
                props.handleMathjaxChange(event, props.element.id)
              }
            ></textarea>
            <div input="resultMath">
              <MathJax.Provider>
                {" "}
                <MathJax.Node formula={props.element.text} />{" "}
              </MathJax.Provider>
            </div>
          </div>
          <div className="saveIcon">
            <SaveIcon onClick={hideInput}></SaveIcon>
          </div>
        </div>
      ) : (
        <div className="secondRendering">
          <div>
            <MathJax.Provider>
              {" "}
              <MathJax.Node formula={props.element.text} />{" "}
            </MathJax.Provider>
          </div>
          <span className="mathKatexNumber"> </span>
          <div className="UpdateIcon">
            <UpdateIcon onClick={showInput} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MathJaxFunction;

/*
import React from 'react'
//import MathJax from 'react-mathjax2'
import MathJax from 'react-mathjax';
function MathJaxFunction() {
  //  const MathJax = require('react-mathjax')
    const tex = `-b \pm \sqrt{b^2-4ac} \over 2a`
 
    return (
        <div>
             <MathJax.Provider>
            <div>
                This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
                And a block one:
 
                <MathJax.Node formula={tex} />
            </div>
        </MathJax.Provider>
        </div>
    )
}

export default MathJaxFunction
*/
