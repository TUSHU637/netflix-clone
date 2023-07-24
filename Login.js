import React, { useState } from 'react'
import './style/login.css';
import Signup from './Signup';
function Login() {
    const [signIn,setSignIn]=useState(false);
    const signUp=(e)=>{
        e.preventDefault();
        setSignIn(true);

    }
  return (
    <div className='login'>
      <div className='login__header'>
        <img className='login__logo' src="https://th.bing.com/th?id=OIP.DkCLrB5suQuau6Jl_jaiogHaB_&w=350&h=94&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
         <button className='login__button' onClick={signUp}>Sign in</button>
      </div>
     
      <div className='login__body'>
      {signIn?(<Signup />):(
        <>
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      
      <form className='login__form' onSubmit={signUp}>
        <input type="email" placeholder='Email address' />
        <button type='submit'>Get Started</button>
      </form>
         </>
      )}
      </div>
      <div className='login__gradient'></div>
    </div>
  )
}

export default Login