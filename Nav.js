import React, { useEffect, useState } from 'react'
import {auth} from './firebase';
import './style/nav.css';
function Nav() {
    const [show,setShow]=useState(false);
    console.log(auth.signOut);
    const changeNavbar=()=>{
        if(window.scrollY>100){
            setShow(true);  
        }
        else{
            setShow(false);
        }
          
    }
    useEffect(()=>{
     window.addEventListener("scroll",changeNavbar)
    //  return ()=>{
    //     window.removeEventListener("scroll",changeNavbar)  
    //  }
    },[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
    <div className='nav__content'>
      <img src="https://th.bing.com/th?id=OIP.DkCLrB5suQuau6Jl_jaiogHaB_&w=350&h=94&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='logo'/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"  className='character' onClick={()=>auth.signOut()} />
    </div>

   </div>
  )
}

export default Nav