import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Rating from './Rating'

import close from '../assets/close.svg'

const Product = ({ item, provider, account, dappazon, togglePop }) => {

  return (
    <div className="product">
      <div className = "product__details">
        <div className = "product__image">
          <img src = {item.image} alt = "image"></img>
        </div>
        <div className = "product__overview">
          <h2>{item.name}</h2>
          <Rating value = {item.rating}></Rating>
          <hr />
          <p>{item.address}</p>
          <h2>{ethers.utils.formatUnits(item.cost.toString() , 'wei')} WEI</h2>
          <hr />
          <h2>Overview</h2>
         {item.status == 0 && (<h5>Item Sold out</h5>)}
          {item.status == 1 && (<h5>Item In Stock</h5>)}
          <button className = "closeButton" onClick ={() => togglePop(false)}>Close</button>
          </div>
      </div>
    </div >
  );
}

export default Product;