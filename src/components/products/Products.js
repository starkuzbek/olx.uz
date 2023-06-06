import React from 'react'
import './Products.css'
import { PRODUCTS } from "../../static/index"
import { Link } from 'react-router-dom';

function Products() {
    console.log(PRODUCTS);
  return (
    <div className='product_wrapper'>
        {
            PRODUCTS.map(({id, title, url, price, manzil})=>
            (<div key={id} className='product_card'>
                <Link to={`/product/${id}`} state={{id,title,url,price}}>
                <img src={url} alt="" />
                </Link>
                <h2>{title}</h2>
                <h1>{manzil}</h1>
                <h3>{price} so'm</h3>
                <ion-icon name="heart-outline"></ion-icon>
            </div>))
        }
    </div>
  )
}

export default Products