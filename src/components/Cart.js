import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  let totalMessage = total > 0 ? total + ' items' : 'Your cart is empty';

  return (
    <div>
      <div id="btnOpenCart"><img src={require("../shoppingCart.svg")} />{totalMessage}</div>
      <div id="cartBackdrop">
        <div id="cartModule">
          <h3>Your Cart</h3>
          <hr/>
          <div>{nodes}</div>
          <p>Total: &#36;{total}</p>
          <button onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
