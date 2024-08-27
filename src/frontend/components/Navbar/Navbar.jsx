import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate= useNavigate();
  return (
    <div className='navbar'>
        <div className="logo"><img src="images/Logo.png" alt="VibezzKamer logo" /></div>
        <div className="menu">
            <div className="links">
                <a href="#">Discover</a>
                <a href="#">Upload</a>
                <a href="#">Community</a>
            </div>   

            <button className='button1' onClick={()=>{navigate('logIn')}}>LogIn</button>
            <button className='button1'>SignUp</button>  
        </div>
        </div>
  )
}
