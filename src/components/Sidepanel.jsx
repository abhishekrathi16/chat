import React from "react";
import Profile from "./Profile";
// import { users } from '../App'

const Sidepanel = () => {
  // console.log(users);
  return (
    <div className="flex flex-col w-[20vw] overflow-y-hidden">
      <div className="heading h-20 border-white border-r-2 text-center p-6 b fixed z-50 bg-blue-500 w-[20vw] text-white">
        Users Chatting
      </div>
      <div className="mt-20 overflow-y-visible users ">
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
        <Profile name="abhi" />
      </div>
    </div>
  );
};

export default Sidepanel;
