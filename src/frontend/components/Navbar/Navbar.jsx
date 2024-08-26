import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><img src="images/Logo.png" alt="VibezzKamer logo" /></div>
        <div className="menu">
            <div className="links">
            <a href="#">Discover</a>
            <a href="#">Upload</a>
            <a href="#">Community</a>
            </div>

            <button className='button1'>LogIn</button>
            <button className='button1'>SignUp</button>
        </div>
        </div>
  )
}
