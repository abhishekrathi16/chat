import React from "react";
import profileIcon from "../assets/profile-icon-png-898.png";

const Profile = () => {
  return (
    <div className="flex h-20 px-5 bg-blue-500 w-[80vw] items-center justify-between ">
      <img src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/null/external-user-interface-a1-creatype-outline-colourcreatype.png" />
      <div className="closeIcon">
        <img src="https://img.icons8.com/ios-filled/50/null/multiply.png" />
      </div>
    </div>
  );
};

export default Profile;
