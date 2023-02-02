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
      </div>
    </div >
  );
}

export default Product;