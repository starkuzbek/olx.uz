import React from 'react'
import './Footer.css'
import { useLocation } from 'react-router-dom'


function Footer() {

  const location = useLocation()

  if(location.pathname === "/login"){
    return <></>
  }


  return (
    <div className='footer'>Footer</div>
  )
}

export default Footer