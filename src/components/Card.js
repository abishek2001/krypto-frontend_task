import React, { useState } from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { FcLike } from "react-icons/fc"
import { AiFillStar } from "react-icons/ai"
import "../styles/Card.css"

const Card = (props) => {

  
  
  // const [orders, setOrders] = useState([])
  const [total, setTotal] = useState(0)
  const addToCart = () => {
    var items = JSON.parse(localStorage.getItem(`${props.email}_cart`)) || [];
    items.push({id: props.id , title: props.title, price : props.price })
    localStorage.setItem(`${props.email}_cart` , JSON.stringify(items))
  }


  return (
    <div className='card-wrapper' id={props.id}>
        <img src={props.img} alt={props.title} />
        <div>
            <p>{props.title}</p>
            <div  className='price-rating'>
                <p>₹{props.price}</p>
                <p>{props.rating} <AiFillStar style={{color:"yellow"}} /></p>
            </div>
        </div>
        <div className='add-fav'>
            <div><button className='addToCart-btn' onClick={addToCart} ><MdOutlineAddShoppingCart /></button></div>
            <div><button className='fav-btn'><FcLike /></button></div>
        </div>
    </div>
  )
}

export default Card