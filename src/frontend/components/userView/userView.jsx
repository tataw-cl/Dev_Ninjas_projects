import React from 'react'
import { UserNavbar } from '../userNavbar/userNavbar'
import { Sidebar } from '../sidebar/sidebar'
import { Section } from '../sections/Section'
import "./userView.css"

export const UserView = () => {
  return (
    <div className='userView'>
        <UserNavbar />
        <div className="sideSection">
        <div className="alto"><Sidebar /></div>
        <div className="tenor"> <Section />
        <Section />
        </div>
        </div>

    </div>
  )
}
