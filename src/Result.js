import FirstPage from "./FirstPage";
import { db } from "./firebase";
import React, { useState, useEffect } from "react";
import "./DisplayForm.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory, useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useAuth } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import SunEditor from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import "./heading.css"
import "./figure.css"
import "./bibliography.css"
import "./math.css"
import "./Icon.css"
function Result() {
	const useStyles = makeStyles((theme) => ({
		root: {
			"& .MuiTextField-root": {
				margin: theme.spacing(1),
			
			},
			marginTop: 150,
		},
		button: {
			margin: theme.spacing(1),
		},
	}));

	const classes = useStyles();
	const history = useHistory();
	const { id } = useParams();
	const [database, setDatabases] = useState({});
	const [loading, setLoading] = useState(false);
	const [universitySet, setUniversitySet] = useState([]);
	const { currentUser } = useAuth();
	// const user = useStateValue();
	function changePage() {
		history.push("/dashboard");
	}
	const updateform = () => {
		history.push("/update-form")
	  }
	 
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
				setLoading(false);
			  });
		  } else {
			setDatabases({});
			console.log("erreur ");
		  }
		}
		getDatafromDatabse();
	  }, []);
	return (
		<div >
			<div className=''>
				
			</div>
			<div className={classes.root}>
		  {database.id && (
			<div key={database.id}>
			  <div className="title">{database.title}</div>
  
			  <div className="author_container">
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
			  <div className="author_container">
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
					  <div className="university">
						<sup>{index + 1}</sup>
						{inputField.university},{" "}
					  </div>
					</div>
				  ))}
			  </div>
  
			  <div className="email_container">
				{database.inputFields.map((inputField) => (
				  <div key={inputField.id}>
					<div className="email">{inputField.email}, </div>
				  </div>
				))}
			  </div>
  
			  <div className="abstract">{"Abstact: " + database.abstract}</div>
  
			  <div className="keyword">{"Keywords: " + database.keyword}</div>
			</div>
		  )}
		  <div className={classes.root}>
		
  
  
		  </div>
		</div>
	  
			<div className={classes.root}>
				
            <SunEditor
			  
			  setDefaultStyle={`
			
			  
       
              width: 100%;
             
              height: 700px;
              
           
          `} 
            hideToolbar={true}
			
            setContents={database.onlyContents}
             />
    
			</div>
			
		</div>
		
	);

}

export default Result;
