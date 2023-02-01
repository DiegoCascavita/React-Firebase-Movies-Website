import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavBar = ()=> {
    if (window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  };

useEffect(()=> {
  window.addEventListener("scroll",transitionNavBar)
  return ()=> window.removeEventListener("scroll",transitionNavBar)
}, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>

        <img 
        onClick={()=> history.push("/")}
        className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' alt=''/>

        <img
        onClick={()=> history.push("/profile")}
        className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </div>
    </div>
  )
}

export default Nav