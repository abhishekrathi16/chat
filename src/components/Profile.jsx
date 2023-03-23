import React from "react";
import profileIcon from "../assets/profile-icon-png-898.png";

const Profile = (props) => {
  return (
    <div className="relative z-10 flex items-center border-b-2 border-r-2 cursor-pointer justify-evenly">
      <div className="image ">
        <img src={profileIcon} alt="" className="h-20" />
      </div>
      <div className="font-bold username">{props.name}</div>
    </div>
  );
};

export default Profile;
