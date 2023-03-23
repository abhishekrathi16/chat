import React from 'react'
import Profile from './Profile'
import { users } from '../App'

const Sidepanel = () => {
    console.log(users);
  return (
    <div className='flex flex-col w-[20vw] overflow-y-hidden'>
        <div className='heading text-center p-6 border-2 border-solid fixed z-50 bg-blue-700 w-[20vw] text-white'>Users Chatting</div>
        <div className='users overflow-y-visible mt-[4rem]'>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
            <Profile name="abhi"/>
        </div>
    </div>
  )
}

export default Sidepanel