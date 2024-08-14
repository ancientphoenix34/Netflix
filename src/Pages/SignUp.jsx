import React, { useRef } from 'react'
import './SignUp.css'
import { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from '../firebase';

const SignIn = () => {

  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  
  const register=(e)=>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser)=>{
console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    })
  };

  const signIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    })
    
  }


  return (
    <div className='signup'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn}>Sign In</button>
        <h4>
          <span className='signUp-grey'>New to Netflix?</span>
          <span className='signUp-link' onClick={register}>Sign Up now<p>(Enter gmail and pswd and click here)</p></span>
          </h4>
      </form>
    </div>
  )
}

export default SignIn
