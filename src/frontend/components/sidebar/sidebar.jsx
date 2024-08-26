import React from 'react'
import { SidebarComponent } from './sidebarComponent/sidebarComponent'

export const Sidebar = () => {
  return (
    <div>
        <div className="sidebarContent">
            <h3>Discover</h3>
            <SidebarComponent img={"images/globe (2).png"} TextData="Browse"/>
            <SidebarComponent img={"images/trending.png"} TextData="Trending"/>
            <SidebarComponent img={"images/apps.png"} TextData="Featured"/>
        </div>
        <div className="sidebarContent">
            <h3>Community</h3>
            <SidebarComponent img={"images/blogger.png"} TextData="Blog"/>
            <SidebarComponent img={"images/events.png"} TextData="Events"/>
        </div>
    </div>
  )
}
