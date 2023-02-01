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
        onClick={()=> {
          history.push("/");
          window.location.reload();
        }}
        className='nav__logo' src='https://www.linkpicture.com/q/coollogo_com-57124810.png' alt=''/>


        <img
        onClick={() => {
          history.push("/profile");
          window.location.reload();
        }}
        className='nav__avatar' src='https://cdn-icons-png.flaticon.com/512/7153/7153150.png' alt=''/>
        </div>
    </div>
  )
}

export default Nav