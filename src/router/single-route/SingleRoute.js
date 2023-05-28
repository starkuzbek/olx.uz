import React from 'react'
import { useLocation } from 'react-router-dom'

function SingleRoute() {
    const { state } = useLocation()
  return (
    <div className='product_value'>
        <h2>{state?.title}</h2>
        <img width={300} src={state?.url} />
        <h3>{state?.price}$ USD</h3>
        <button>buy now</button>
    </div>
  )
}

export default SingleRoute