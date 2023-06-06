import React from 'react'
import './Navpro.css'

function Navpro(props) {
  return (
    <div className='navpro'>
        <div className="proOne">
            <img style={{backgroundColor:props?.bg}} src={props?.url} alt="" />
            <h1>{props?.kat}</h1>
        </div>
    </div>
  )
}

export default Navpro