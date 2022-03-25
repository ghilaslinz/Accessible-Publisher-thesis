import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'
export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const TITLE = 'Accessible Publisher : Update Profile'
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4" >Password Reset*</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit} action="/">
            <Form.Group >
              <Form.Label for="email">Email</Form.Label>
              <Form.Control id="email" type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="btn btn-primary btn-lg active w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link className="link"  to="/">Login</Link>
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
