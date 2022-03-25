import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { CenterFocusStrong } from "@material-ui/icons"
import "./Style.css"
import { Helmet } from 'react-helmet'
export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const TITLE = 'Accessible Publisher : Login'

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in : Incorrect email or password")
    }

    setLoading(false)
  }

  return (
    <>
  	

      <ul class="skip-links">

  <li><a href="#maincontent">Skip to the main content</a></li>
</ul>
     <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <header>
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><h1>Accessible Publisher</h1></a>
  </nav> 
  </header>
      
        <main  id="maincontent">
       
      <Card className="mt-5 " >
        <Card.Body >
          <h2 /*tabIndex="0"*/ className="text-center font-weight-bold mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} action="/">
            <Form.Group>
              <Form.Label id="maincontent" for="email">Email*</Form.Label>
              <Form.Control id="email" type="email" ref={emailRef} /*aria-label="Enter your email"*/ required />
            </Form.Group>
            <Form.Group >
              <Form.Label for="password">Password*</Form.Label>
              <Form.Control id="password" type="password" ref={passwordRef} /*aria-label="Enter your password"*/ required />
            </Form.Group>
            <Button disabled={loading} className="btn btn-primary btn-lg active w-100" type="submit" >
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link className="link"  to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      </main>
      <div className="w-100 text-center mt-2">
        Need an account? <Link className="link"  to="/signup">Sign Up</Link>
      </div>
      
    </>
  )
}
