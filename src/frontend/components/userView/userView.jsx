import React from 'react'
import { UserNavbar } from '../userNavbar/userNavbar'
import { Sidebar } from '../sidebar/sidebar'

export const UserView = () => {
  return (
    <div className='userView'>
        <UserNavbar />
        <Sidebar />
    </div>
  )
}
