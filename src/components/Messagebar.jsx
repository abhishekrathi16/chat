import React from "react";

const Messagebar = () => {
  return (
    <div className="absolute  flex items-center justify-between bottom-0  h-20 w-[80vw]">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full h-20 px-5 text-black bg-slate-300 "
        id="txtMessage"
        name="txtMessage"
      />
      <button className="h-20 px-20 text-xl text-white bg-blue-500 cursor-pointer" id="btnSend" disabled="disabled">
        Send
      </button>
    </div>
  );
};

export default Messagebar;
