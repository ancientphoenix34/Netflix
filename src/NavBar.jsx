import React, { useEffect, useState } from 'react'
import './NavBar.css'
import NetflixLogo from './assets/icons8-netflix-480.png'
import AvatarLogo from './assets/avatar.png'
import {  useNavigate } from "react-router-dom";
const NavBar = () => {
  const [show,handleShow]=useState(false);

  const navigate=useNavigate();

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
      <img onClick={()=>navigate("/")}className='nav-logo' src={NetflixLogo} alt="" />
      <img onClick={()=>navigate("/profile")} className='nav-avatar' src={AvatarLogo} alt="" />
      </div>
    </div>
  )
}

export default NavBar
