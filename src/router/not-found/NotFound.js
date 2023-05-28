import React from 'react'
import './NotFound.css'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
    const location = useLocation()

 

  return (
    <div className='not-found'>
        <h1>404</h1>
        <h2>Not Found</h2>
        <Link to={"/"}>Go to Home</Link>
    </div>
  )
}

export default NotFound