import React from "react";
import profileIcon from "../assets/profile-icon-png-898.png";

const Profile = (props) => {
  return (
    <div className="relative z-10 flex flex-row items-center justify-center p-6 border-2 border-t-0 cursor-pointer">
      <div className="image">
        <img src={profileIcon} alt="" className="h-[3rem] w-[3rem]" />
      </div>
      <div className="px-24 font-bold username">{props.name}</div>
    </div>
  );
};

export default Profile;
