import React from 'react'
import './Footer.css'
import { useLocation } from 'react-router-dom'
import footimg from "../../assets/gp.jpg"


function Footer() {

  const location = useLocation()

  if(location.pathname === "/login"){
    return <></>
  }


  return (
    <div className='footer'>
      <hr />
      <div className="ul1">
      <ul>
        <li>Mobil ilovalar</li>
        <li>Yordam</li>
        <li>Pullik xizmatlar</li>
        <li>OLX-da biznes</li>
        <li>Saytda reklama</li>
        <li>Foydalanish shartlari</li>
        <li>Maxfiylik siyosati</li>
        <li>Hamkorlar</li>
      </ul>
      </div>
      <div className="ul2">
        <ul>
          <li>Qanday sotib olish va sotish?</li>
          <li>Xavfsizlik qoidalari</li>
          <li>Sayt xaritasi</li>
          <li>Mintaqalar xaritasi</li>
          <li>Career</li>
        </ul>
      </div>
      <img src={footimg} className='img1' alt="" />

    </div>
  )
}

export default Footer