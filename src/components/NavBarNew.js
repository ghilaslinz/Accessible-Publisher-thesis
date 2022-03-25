

import React, { useState } from "react"
import { Card, Button, Alert, Navbar } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Style.css"
export default function NavBarNew() {
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

    function CreateNewDocument() {
		history.push("/firstpage");
	}
  return (
   
    < >


  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand"  href="/dashboard"><h1>Accessible Publisher</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        {/*
      <li class="nav-item active">
        <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
      </li>
        */}
      <li class="nav-item active">
      {/*  <a class="nav-link" onClick={CreateNewDocument}>Create New Document</a>*/}

    <a  class="nav-link" href="/firstpage">Create New Document</a>
      </li>
      <li class="nav-item active">
      
        <a  class="nav-link" href="/update-profile" >Profile</a>
      </li>
      <li class="nav-item active">
        {/*<a class="nav-link" onClick={CreateNewForm} role="button">Feedback</a>*/}
        <a  class="nav-link" href="/questionnaire"  /*role="button"*/>Feedback</a>
      </li>

      <li class="nav-item active">
        {/*<a class="nav-link" onClick={CreateNewForm} role="button">Feedback</a>*/}
        <a  class="nav-link" href="/help"  /*role="button"*/>Help</a>
      </li>


      <li class="nav-item active" >
        <a  tabindex="0" class="nav-link" onClick={handleLogout} /*role="button"*/>Logout</a>
    
      </li>
    </ul>
  </div>
</nav>
     
    </>
    
    
  )
}
