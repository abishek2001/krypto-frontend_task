import React from 'react'
import "../styles/CheckoutPage.css"
import Data from "../db.json"

const CheckoutPage = ({ email ,toggleCart, setToggleCart}) => {
  
  let cart = []
  cart.push(JSON.parse(localStorage.getItem(`${email}_cart`))) 
  console.log("cart : " ,cart)

  var total = 0;
  const toggle = () => {
    if(toggleCart){
      setToggleCart(false)
    }
    else{
      toggleCart(true)
    }
  }
  return (
    <div className='checkout-wrapper'>
      <div className='toggle-div'><button id='toggle-btn' onClick={toggle}>Close CART</button></div>
      <table className='cart-table'>
        <tr className='head-row'>
          <td className='cell' >ID</td>
          <td className='cell'>TITLE</td>
          <td className='cell'>PRICE</td>
        </tr>
        {
          cart.map(item => (
            item.map(prod => (
              <tr>
                <td className='cell'>{prod.id}</td>
                <td className='cell'>{prod.title}</td>
                <td className='cell'>{prod.price}</td>

                {total += parseInt(prod.price)}
              </tr>
            ))
          ))
        }
      </table>

      <p style={{padding:"1rem"}}>Total : ₹{total}/-</p>
    </div>
  )
}

export default CheckoutPage