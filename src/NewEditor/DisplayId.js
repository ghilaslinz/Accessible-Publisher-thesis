
import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import "./DisplayForm.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import { Link, useHistory, useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { useAuth } from "../contexts/AuthContext";

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { Helmet } from 'react-helmet'
function DisplayId() {

	const ColorButton = withStyles((theme) => ({
		root: {
		  color: theme.palette.getContrastText("#9C1150"),
		  backgroundColor: "#9C1150"
		},
	  }))(Button);
	const useStyles = makeStyles((theme) => ({
	  root: {
		"& .MuiTextField-root": {
		  margin: theme.spacing(1),
		},
	
	  },
	  button: {
		margin: theme.spacing(1),
	  },
	 
	}));
  
	const classes = useStyles();
	const history = useHistory();
	const { id } = useParams();
	const [database, setDatabases] = useState({});
	const [universitySet, setUniversitySet] = useState([]);
	const [loading, setLoading] = useState(false);
	const { currentUser } = useAuth();
	const TITLE = 'Accessible Publisher : Display the header of the paper'
	// const user = useStateValue();
	function changePage() {
	  history.push("/dashboard");
	}
	const updateform = () => {
	  history.push("/update-form");
	};
  
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
	  <div>
		   

		<div className="">
		 {/* <NavBar />*/}
	
		</div>
		<div className={classes.root}>
		
		  {database.id && (
			<div key={database.id}>
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
  
			  <div className="abstract">{"Abstract: " + database.abstract}</div>
  
			  <div   className="keyword">{"Keywords: " + database.keyword}</div>
			</div>
		  )}
	
		</div>
	  </div>
	);
  }
  

export default DisplayId;
