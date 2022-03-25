import React, { useRef, useState,useCallback } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Helmet } from 'react-helmet'
import './skip.css'
export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const autoFocus = useCallback(el => el ? el.focus() : null, [])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const history = useHistory()
  const TITLE = 'Accessible Publisher : Signup'

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    if (passwordRef.current.value.length<=5 ) {
      return setError("Password too short, it should be at least 6 characters")
    }

    try {
      setError("")
      setMessage("Account successfully created")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
     
      history.push("/")
    } catch {
      setError("Failed to create an account")
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><h1>Accessible Publisher</h1></a>
  </nav> 
  
        <main  id="maincontent">
      <Card className="mt-5 ">
        <Card.Body>
          <h2  className="text-center mb-4">Sign Up</h2>
          {error && <Alert ref={autoFocus} variant="danger">{error}</Alert>}
          {message && <Alert ref={autoFocus} variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit} action="/">
            <Form.Group >
              <Form.Label for="email">Email*</Form.Label>
              <Form.Control id="email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group >
              <Form.Label for="password">Password*</Form.Label>
              <Form.Control id="password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group >
              <Form.Label for="password-confirm">Password Confirmation*</Form.Label>
              <Form.Control id="password-confirm" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="btn btn-primary btn-lg active w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      
      <div className="w-100 text-center mt-2 ">
        Already have an account? <Link className="link"  to="/">Log In</Link>
      </div>
      </main>
    </>
  )
}
