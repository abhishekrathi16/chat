import React from 'react'
import profileIcon from '../assets/profile-icon-png-898.png'

const Profile = () => {
  return (
    <div className='flex flex-row'>
        <div className='image'>
            <img src={profileIcon} alt=""/>
        </div>
    </div>
  )
}

export default Profile