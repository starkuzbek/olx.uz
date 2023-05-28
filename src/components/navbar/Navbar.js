import React, {useState} from 'react'
import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'


function Navbar() {

  const [show, setShow] = useState("false")

  const location = useLocation()

  if(location.pathname === "/login"){
    return <></>
  }
  




  return (
    <div className='navbar'>
      <h2 className='logo'>
      <NavLink to={"/"}>STARK</NavLink>
      </h2>

      <div className={`nav_collection ${show? "show": ""}`}>
        <NavLink className='nav_link' to={"/"}>Home</NavLink>
        <NavLink className='nav_link' to={"/about"}>About</NavLink>
        <NavLink className='nav_link' to={"/contact"}>Contact</NavLink>
        <NavLink className='nav_link' to={"/login"}>Login</NavLink>
      </div>
      <div className="nav_menu" onClick={()=>setShow(!show)}>
      <ion-icon name="menu-outline"></ion-icon>
      </div>
    </div>
  )
}

export default Navbar