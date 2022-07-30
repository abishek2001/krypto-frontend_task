import React from 'react'
import "../styles/NavBar.css"
import { BsCart2 } from "react-icons/bs"
import { MdFavorite } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"


const NavBar = ({email}) => {
  return (
    <div className='nav-container'>
        <div className='nav-left'><a className='nav-links' href='/'>Shopkart. </a></div>
        <div  className='nav-right'>
            <div ><FaUserAlt />Account</div>
            <a >Logout</a>
            <a className='nav-links' href='/checkout'><BsCart2 /></a>
        </div>
    </div>
  )
}

export default NavBar