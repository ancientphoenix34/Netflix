import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/icons8-netflix-480.png'
import SignUp from './SignUp';

const Login = () => {

    const [signIn,setSignIn]=useState(false);

  return (
    <div className='login'> 
      <div className="login-background">
        <img  className="login-logo" src={logo} alt="" />
        <button onClick={()=>{setSignIn(true)}}
        className='login-button'>Sign in</button>
        <div className="login-gradient">
        </div>
        <div className="login-body">
            {signIn ?(<SignUp/>):
            (
                <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="login-input">
                <form>
                   <input type="email" placeholder='Email address' />
                   <button onClick={()=>{setSignIn(true)}}
                   className='login-input-button'>GET STARTED</button>
                </form>
            </div>
            </>
            )
            }
            
        </div>
      </div>
    </div>
  )
}

export default Login
