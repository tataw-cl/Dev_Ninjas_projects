import React from 'react'
import { Searchbar } from '../searchbar/searchbar'
import './userNavbar.css'

export const    UserNavbar = () => {
  return (
    <div>
        <div className="navContent">
            <div className="navItem">
                <img src="images/Logo.png" alt="Vibezz Logo" />
            </div>
            <div className="navItem">
               <input type="text" placeholder='search for something' />
            </div>
            <div className="navItem">
                <img src="images/notification.png" alt="notification button" />
                <img src="images/Ellipse 10.png" alt="User profile" />
                Name of client
            </div>
            <div className="navItem">
               
            </div>
        </div>
    </div>
  )
}
