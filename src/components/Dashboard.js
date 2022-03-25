import React, { useEffect, useState } from "react";
import NavBarNew from "./NavBarNew";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import './skip.css'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './Dashboard.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box';
import { Alert } from "react-bootstrap"
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const useStyles = makeStyles({
	root: {
		
		
		minWidth: 300,
		minHeight: 200,
		maxHeight : 400,
		marginTop: 100,
		margin : 10,
	},
	bullet: {
		display: "inline-block",
		margin: "10 10px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function Dashboard() {
	const [databases, setDatabases] = useState([]);
	const [loading, setLoading] = useState(false);
	const { currentUser } = useAuth();
	const history = useHistory();
	const TITLE = 'Accessible Publisher : Dashboard'
	const [open, setOpen] = React.useState(false);
	const [openAlert, setOpenAlert] = React.useState(false);
	const [message, setMessage] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
  

	useEffect(() => {
		function getDatafromDatabse() {
			if (currentUser) {
				setLoading(true);
				
				db.collection("users")
					.doc(currentUser?.uid)
					.collection("databases")
					.get()
					.then((item) => {
						const items = item.docs.map((doc) => ({
							...doc.data(),
							id: doc.id,
						}));
						console.log(items);

						setDatabases(items);
						setLoading(false);
					});
			} else {
				setDatabases([]);
				console.log("erreur ");
			}
		}
		getDatafromDatabse();
	}, []);
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	function CreateNewForm() {
		history.push("/firstpage");
	}


	
	const deleteDashboardElement = (id) =>{
		const values = [...databases];
		values.splice(id, 1);
		setDatabases(values);

//		e.preventDefault();
		// console.log(title, keyword, abstract);
		//consol.log("InputFields", inputFields);
	


		setMessage(true);
		db.collection("users")
	
		  .doc(currentUser?.uid)
		  .collection("databases")
		  .doc(`${id}`)
		  .delete({
			// id: uuidv4(),
			// id : `${id}`,
			databases
		  })
		  
		  .then(() => {
			
		//	alert("Your document has been deleted👍");
	//	setOpenAlert(true);
			//history.push("/dashboard");
		  })
		  .catch((error) => {
			alert(error.message);
	
			
		  });
		  setOpen(false);

		  
	}

console.log("the new dataabse" +databases);
	return (
		<div >
		
		<Helmet>
          <title>{ TITLE }</title>
        </Helmet>
		<ul class="skip-links">

<li><a href="#maincontent">Skip to the main content</a></li>
</ul>
			<NavBarNew />
			<main  id="maincontent">
			{message ?  
 <Alert  variant="success" autoFocus>document deleted</Alert>
     : (
  <div></div>
)
 } 
			<h2>My documents  </h2>
			{/*<div className='d-flex justify-content-around' >*/}
			<div className=''>


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
        Document deleted 
        </Alert>
      </Collapse>
		*/}
    {/*  <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpenAlert(true);
        }}
      >
        Re-open
	</Button> */}
    
{/*				
			<Card className={classes.root}>
				<CardContent>
					<Typography component='h5' variant='h5'></Typography>
					<Button
					
						variant='contained'
						className={classes.button}
						onClick={CreateNewForm}
					>
						Create a new Document
					</Button>
				</CardContent>
				<CardActions></CardActions>
			</Card>
*/}
			{databases.map((database, id) => (
				<div key={database.id} className="dashboard_elements">
					
							<article className="dashboard_element">
								
				
							<div class="d-flex justify-content-between"> 
							<div>
								<Typography component='h5' variant='h5'>
									{database.title}
									
								</Typography>


								<Typography>
								{database.inputFields.map((inputField, index) => (
									
				  					<span key={inputField.id}>
										
					 				 {inputField.author } 
									  &nbsp;
					 
										
				 						 </span>
				))}
			  	</Typography>
								

								<Typography component='' variant=''>
								
									<p>Abstract : {database.abstract} </p>
								</Typography>
							

							
								</div>
					
<div className="dashboard_icons"	>			
			{/*	<Link to={`/update/${database.id}`}  >	
				<IconButton  tabindex="0"
			
                      className="textfield__icon">
                      <EditIcon />
                      <span class="sr-only">Update document</span>
                      </IconButton>
					  </Link>
							*/}

				<IconButton  tabindex="0"
			//	onClick={() =>deleteDashboardElement(database.id)}
			onClick={handleClickOpen}
                      className="textfield__icon">
                      <DeleteIcon />
                      <span class="sr-only">Delete document</span>
                      </IconButton>
</div>
			
							
					</div>
					
					
				{/*			
					<Link to={`/formular/${database.id}`}>	
							<CardActions>
								<Button size='small'>See More</Button>
							</CardActions>
							
							</Link>
				*/}
				<div className="caca" >
				<div class="d-flex flex-row">
					<Link to={`/update/${database.id}`}>	
							<CardActions>
								<Button size='small'>Edit paper informations</Button>
							</CardActions>
							
					</Link>

					<Link to={`/component/${database.id}`}>	
							<CardActions>
								<Button size='small'>Edit Main</Button>
							</CardActions>
							
					</Link>


					<Link to={`/finalresult/${database.id}`}>	
							<CardActions>
								<Button size='small'>Preview</Button>
							</CardActions>
							
					</Link>
				</div>
				
					</div>
							
						</article>
				
			
					<Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
          {"Are you sure that you want to delete this document ?"}
        </DialogTitle>
        
        <DialogActions>
          <Button  onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={() =>deleteDashboardElement(database.id)} >
           Delete
          </Button>
        </DialogActions>
      </Dialog>
				</div>
			))}
			</div>

	
			</main>
		</div>
	);
}
