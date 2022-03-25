

import React, { useState } from "react"
import { Card, Button, Alert, Navbar } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Style.css"
export default function NavBar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
   //   await logout()
      history.push("/");
    } catch {
      setError("Failed to log out")
    }
  }
	function CreateNewForm() {
		history.push("/questionnaire");
	}
  return (
   
    < >
  
      <Navbar fixed="top" bg="dark" className="d-flex justify-content-end" >
      {/*  <Card.Body class="d-flex justify-content-end "> */}
         {/*<h2 className="text-center mb-4">Profile</h2> */}
         <button onClick={CreateNewForm}>click on the questionnaire</button>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="account">
          <strong>Your account :</strong> {currentUser.email}
          </div>

          <div className="update">
          <Link to="/update-profile" className="btn btn-primary btn-lg active w-100 mt-3 ">
            Update Profile
            
          </Link>
          </div>
          <div className="logout">
          <Button  onClick={handleLogout} className="btn btn-primary btn-lg active  w-100 mt-3 ">
          Log Out
        </Button>
        </div>
     {/*    </Card.Body> */}
        
      </Navbar>
      <div className="w-100 text-center mt-2">
        
      </div>
     
    </>
    
    
  )
}
