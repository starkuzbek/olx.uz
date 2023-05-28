import React from 'react'
import './Products.css'
import { PRODUCTS } from "../../static/index"
import { Link } from 'react-router-dom';

function Products() {
    console.log(PRODUCTS);
  return (
    <div className='product_wrapper'>
        {
            PRODUCTS.map(({id, title, url, price})=>
            (<div key={id} className='product_card'>
                <Link to={`/product/${id}`} state={{id,title,url,price}}>
                <img src={url} alt="" />
                </Link>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <button>Buy now</button>
            </div>))
        }
    </div>
  )
}

export default Products