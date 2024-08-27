import React from 'react'
import './userNavbar.css'

export const    UserNavbar = ({userInfo}) => {
  return (
    <div>
        <div className="navContent">
            <div className="navItem one">
                <img src="images/Logo.png" alt="Vibezz Logo" className={"logo1"}/>
            </div>
            <div className="navItem two">
               <input type="search" placeholder='Search...' />
            </div>
            <div className="navItem three">
                <img src="images/notification.png" alt="notification button" className={"notification"} />
                <img src="images/Ellipse 10.png" alt="User profile" className={"usericon"} />
                <p className={"txt"}>{userInfo}</p>
            </div>
        </div>
    </div>
  )
}
