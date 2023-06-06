import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo1.png"
import { NavLink, useLocation } from 'react-router-dom'


function Navbar() {

  const location = useLocation()

  if(location.pathname === "/login"){
    return <></>
  }
  




  return (
    <div className='navbar'>
      <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="nav-til">
            O`Z | РУ
        </div>
    <div className="nav-chat">
    <ion-icon name="chatbubble-outline"></ion-icon>
    </div>
        <h1 className='nav-xabar'>Xabarlar</h1>
        <div className="nav-yurak"><ion-icon name="heart-outline"></ion-icon></div>
        <div className="nav-person"><ion-icon name="person-outline"></ion-icon></div>
      <NavLink to={"/login"}>
       <div className="nav-hisob"> <h1>Hisobingiz</h1></div>
       </NavLink>
        <button className='nav-btn'>E'lon berish</button>

    </div>
  )
}

export default Navbar