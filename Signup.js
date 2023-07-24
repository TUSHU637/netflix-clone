import React, { useRef } from 'react'
import './style/login.css';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from './firebase';

function Signup() {
  const emailRef=useRef(null);
  const passRef=useRef(null);
  const register=(e)=>{
 e.preventDefault();
console.log(emailRef.current.value)
createUserWithEmailAndPassword(
   auth,
  emailRef.current.value,
  passRef.current.value
).then(authUser=>{
  console.log(authUser)
})
.catch(error=>{
  alert(error +"please Enter correct details !!!!!");
})
  }
  const signIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(
    auth,
  emailRef.current.value,
  passRef.current.value
    ).then(authUser=>{
        console.log(authUser)
      })
      .catch(error=>{
        alert("please sign up first!!!" + error)
      })
  }
  return (
    <div className='signUpScreen' >
    <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Enter Email' />
        <input ref={passRef} type="password" placeholder='Enter Password' />
        <button onClick={signIn}>sign In</button>
        <h4>New to Netflix <span onClick={register}>Sign Up Now</span></h4>
    </form>

    </div>
  )
}

export default Signup