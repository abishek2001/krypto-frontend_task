import React, { useEffect, useState } from 'react'
import "../styles/forms.css"
import Products from './Products'

const Login = ({loggedEmail, setLoggedEmail}) => {

  
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedStatus, setLoggedStatus] = useState(false)

  const handleSubmit = (e) => {

    e.preventDefault()

    let mail = JSON.parse(localStorage.getItem(email)).email
    let pass = JSON.parse(localStorage.getItem(email)).password

    if(email === "" || password === ""){
      alert("Fields cannot be empty!");
      return;
    }
    else if(email !== mail && password !== pass ){
      alert("Invalid Creds / User Doesn't Exist")
    }
    else{
      if(mail === email && pass === password){
        
        alert("You're successfully Logged In!")
        setLoggedEmail(mail)
        setLoggedStatus(true)
        
      }
    }
  }

  return (
    <>
      {

         
          !loggedStatus

        ?

        <div className='form-container'>
            <div className='form-wrapper'>
               
                <form className='main-form-login'>
                <div><p className='form-head'>Log In</p></div>
                    <input className='inputs' onChange={e => setEmail(e.target.value)} type="text" id='login-email' placeholder='Email' />
                    <input className='inputs' onChange={e => setPassword(e.target.value)} type="password" id='login-password' placeholder='Password' />
                    <button className='inputs form-btn' onClick={handleSubmit} >Login</button>
                    <a className='dont-have' href='/'>New User? Sign Up</a>
                </form>
            </div>
        </div>

        : 

        <Products email={email} />
      }    
    
    
    </>
  )
}

export default Login