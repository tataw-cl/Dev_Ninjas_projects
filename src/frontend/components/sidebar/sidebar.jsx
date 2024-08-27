import React from 'react'
import { SidebarComponent } from './sidebarComponent/sidebarComponent'
import "./sidebar.css"
import { useState } from 'react'
import Post from '../postComp/post/Post'
import {useNavigate } from 'react-router-dom'

export const Sidebar = () => {
    const [showPost, setShowPost] = useState(false)
    const [showLogOut, setShowLogOut] = useState(false)
   const navigate=useNavigate();
    if (showLogOut === true) {
         navigate('/logIn')}
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
        <button className='button2' onClick={()=>{setShowPost(true)}}>Create post</button>
        <button className='button2' id='logOut' onClick={()=>{setShowLogOut(true)}}>Log out</button>
        </div>
        {showPost && <div className='post'>
            <Post />
            </div>}

    </div>
  )
}
