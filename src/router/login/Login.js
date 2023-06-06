import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {

  return (
    <div className='login'>
        <div className="div1">
          <button className='bt1'> <ion-icon name="logo-facebook" ></ion-icon> Facebook orqali kirish</button>
          <button className='bt1'> <ion-icon name="logo-apple"></ion-icon> Apple orqali kirish</button>
          <button className='bt1'> <ion-icon name="logo-google"></ion-icon> Google orqali kirish</button>
          <div className="div2"><hr /> <h1>YOKI</h1> <hr className='hr2' /></div>
          <div className="div3">
            <h1>Kirish</h1>
            <h2>Royxatdan otish</h2>
          </div>
          <div className="div4">
            <h1>Telefon raqami yoki email</h1>
            <input type="text" placeholder='' />
          </div>
          <div className="div5">
            <h1>Parol</h1>
            <input type="text" placeholder='' />
          </div>
          <div className="div6">
            <h1>Parolni unutdingizmi?</h1>
            <button className='bt2'>Kirish</button>
          </div>
        </div>
        
















        <Link to={"/"}>
        <button className='bt3'>Chiqish<ion-icon name="exit-outline"></ion-icon></button>
        </Link>
    </div>
  )
}

export default Login