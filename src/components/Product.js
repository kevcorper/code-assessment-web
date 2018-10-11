import React from 'react'
import PropTypes from 'prop-types'

// unsure of how to reference images in this component (attempted to add imagePaths to products.json)

const Product = ({ price, inventory, title, imagePath }) => (
  <div>
  	<img src={require("../chronograph.png")} />
  	<div className="product-info"> 
  		<div className='product-title'>{title}</div>
    	<div className='product-price'>&#36;{price}</div>
    	<div className='product-inventory'>{inventory ? `${inventory} REMAINING` : 'Out of stock'}</div>
  	</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
