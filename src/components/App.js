

import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import '../App.css';
import FirstPage from "../FirstPage";
import Questionnaire from '../Questionnaire'
import Help from '../Help'

import { Switch, Route, useParams } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import DisplayId from "../DisplayId";
import Dashboard from "./Dashboard";
import UpdateForm from '../UpdateForm';

import Result from '../Result';

import MainPage from "../NewEditor/MainPageDrag";
import FinalResult from "../NewEditor/FinalResult";

function App() {
	return (
		<div >

			<div>
	
				<AuthProvider>
					<Switch>
						<PrivateRoute exact path='/firstpage' component={FirstPage} />
						<PrivateRoute exact path='/questionnaire' component={Questionnaire} />
						<PrivateRoute exact path='/help' component={Help} />



						<PrivateRoute
							exact
							path='/update-profile'
							component={UpdateProfile}
						/>
					

						<PrivateRoute exact path='/preview/:id'>
							<Result />
						</PrivateRoute>

						<PrivateRoute exact path='/component/:id'>
						<MainPage />
						</PrivateRoute> 

						<PrivateRoute exact path='/finalresult/:id'>
						<FinalResult />
						</PrivateRoute> 
{/*
<PrivateRoute exact path='/component/:id'>
<MyComponent />
	</PrivateRoute> 

								<PrivateRoute exact path='/component/:id'>
								<MainPage />
								</PrivateRoute>
*/}
						<PrivateRoute exact path='/update/:id'>
							<UpdateForm />
						</PrivateRoute>

						<PrivateRoute exact path='/formular/:id'>
							<DisplayId />
						</PrivateRoute>
						<PrivateRoute exact path='/dashboard'>
							<Dashboard />
						</PrivateRoute>

						<Route exact path='/' component={Login} />

						<Route exact path='/signup' component={Signup} />
						<Route exact path='/forgot-password' component={ForgotPassword} />
					</Switch>
				</AuthProvider>
			</div>
		</div>
	);
}

export default App;

