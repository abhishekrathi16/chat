import React from 'react'
import profileIcon from '../assets/profile-icon-png-898.png'

const Profile = (props) => {
  return (
    <div className='flex flex-row justify-center items-center p-6 border-2 border-t-0 relative z-10 cursor-pointer'>
        <div className='image'>
            <img src={profileIcon} alt="" className='h-[3rem] w-[3rem]'/>
        </div>
        <div className='username font-bold px-24'>
            {props.name}
        </div>
    </div>
  )
}

export default Profile