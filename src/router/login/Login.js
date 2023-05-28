import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {

  return (
    <div className='login'>
        <h1>Log In</h1>
        <Link to={"/"}>
        <button>Go to Home</button>
        </Link>
    </div>
  )
}

export default Login