import React from 'react'
import Profile from './Profile'

const Sidepanel = () => {
  return (
    <div className='flex flex-col'>
        <div className='heading'>Users Chatting</div>
        <div className='users'>
            <Profile />
        </div>
    </div>
  )
}

export default Sidepanel