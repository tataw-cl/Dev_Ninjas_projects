import React from 'react'
import './userNavbar.css'

export const    UserNavbar = () => {
  return (
    <div>
        <div className="navContent">
            <div className="navItem one">
                <img src="images/Logo.png" alt="Vibezz Logo" />
            </div>
            <div className="navItem two">
               <input type="text" placeholder='search for something' />
            </div>
            <div className="navItem three">
                <img src="images/notification.png" alt="notification button" />
                <img src="images/Ellipse 10.png" alt="User profile" />
                Name of client
            </div>
        </div>
    </div>
  )
}
