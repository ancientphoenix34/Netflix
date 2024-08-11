import React, { useEffect, useState } from 'react'
import './NavBar.css'
import NetflixLogo from './assets/icons8-netflix-480.png'
import AvatarLogo from './assets/avatar.png'

const NavBar = () => {
  const [show,handleShow]=useState(false);

  const transitionNavbar=()=>{
    if(window.scrollY>=100){
      handleShow(true);
    }
    else{
      handleShow(false)
    }
  }


  useEffect(()=>{
window.addEventListener("scroll",transitionNavbar);
return ()=>{
  window.removeEventListener("scroll",transitionNavbar)
}
  },[])


  return (
    <div className={`navbar ${show && "nav-black"}`}>
      <div className="nav-contents">
      <img className='nav-logo' src={NetflixLogo} alt="" />
      <img className='nav-avatar' src={AvatarLogo} alt="" />
      </div>
    </div>
  )
}

export default NavBar
