import React from 'react'
import "./SingleRpute.css"
import { useLocation } from 'react-router-dom'

function SingleRoute() {
    const { state } = useLocation()
  return (
    <div className='product_value'>
        <div className="sing-img">
        <img width={300} src={state?.url} />
        </div>
        <div className="single-about">
        <h2>{state?.title}</h2>
        <h3>{state?.price} so'm</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit alias, excepturi laudantium doloremque rerum ea!</h4>
        <button>Sotib olish</button>
        </div>
    </div>
  )
}

export default SingleRoute