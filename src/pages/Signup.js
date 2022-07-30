import React, { useState } from 'react'
import "../styles/forms.css"
import Data from '../db.json'




const Signup = () => {


const [fname, setFname] = useState("")
const [lname, setLname] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("");
const [favorites, setFavorites] = useState([]);
const [orders, setOrders] = useState([])


const handleSumbit = (e) => {
  e.preventDefault();

    if(localStorage.getItem(email) !== null){
      alert("User Already Exists, Kindly Log in")
      return;
    }
    else if(password !== confirmPassword){
      alert("Password and Confirm password must match!");
    }
    else{
      localStorage.setItem(email, JSON.stringify({fname, lname, email, password, favorites, orders}))
      alert("User Added SuccessfullyS")
    }


}

  return (
    <div className='form-container'>
        <div className='form-wrapper'>
        
            
            <form className='main-form'><div><p className='form-head'>Sign Up</p></div>
                <div>
                    <input className='inputs sp' type="text" id='signup-fname' placeholder='First Name' value={fname} onChange={e => setFname(e.target.value)} />
                    <input className='inputs sp' type="text" id='signup-lname' placeholder='Last Name' value={lname} onChange={e => setLname(e.target.value)} />
                </div>
                <input className='inputs' type="text" id='signup-email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input className='inputs' type="password" id='signup-password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <input className='inputs' type="password" id='signup-confirm-password' placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button className='inputs form-btn' onClick={handleSumbit} > Sign In</button>
                <a className='dont-have' href='/login'>Existing User? Login</a>
            </form>
        </div>
    </div>
  )
}

export default Signup