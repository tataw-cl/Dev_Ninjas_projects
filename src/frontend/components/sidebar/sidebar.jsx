import React from 'react'
import { SidebarComponent } from './sidebarComponent/sidebarComponent'
import "./sidebar.css"

export const Sidebar = () => {
  return (
    < div
    className='container'>
    <div className='container1'>
        <div className="sidebarContent">
            <h3>Discover</h3>
            <SidebarComponent img={"images/globe1.svg"} TextData="Browse"/>
            <SidebarComponent img={"images/trending.png"} TextData="Trending"/>
            <SidebarComponent img={"images/apps.png"} TextData="Featured"/>
        </div>
        <div className="sidebarContent">
            <h3>Community</h3>
            <SidebarComponent img={"images/blogger.png"} TextData="Blog"/>
            <SidebarComponent img={"images/events.png"} TextData="Events"/>
        </div>
        <button className='button2'>create post</button>
        <button className='button2' id='logOut'>LogOut</button>
        </div>

    </div>
  )
}
