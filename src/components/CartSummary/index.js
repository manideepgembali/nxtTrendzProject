// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div className="cart-summ">
            <h1>
              <span>Order Total:</span> Rs {total} /-
            </h1>
            <p>{cartList.length}Items in cart</p>
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
