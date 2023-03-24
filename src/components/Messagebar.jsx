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
      <button
        className="h-20 px-20 text-xl text-white bg-blue-500 cursor-pointer"
        id="btnSend"
        disabled="disabled"
      >
        Send
      </button>
    </div>
  );
};

export default Messagebar;

// import { useState } from "react";

// function Messagebar({ toUserName, onSend }) {
//   const [message, setMessage] = useState('');

//   const handleMessageSend = (event) => {
//     event.preventDefault();
//     if (!message.trim()) {
//       alert('Empty message');
//       return;
//     }
//     onSend(toUserName, message);
//     setMessage('');
//   };

//   return (
//     <form onSubmit={handleMessageSend}>
//       <label>
//         Message:
//         <input
//           type="text"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//           maxLength="5000"
//           style={{ width: '380px' }}
//         />
//       </label>
//       <button type="submit">Send</button>
//     </form>
//   );
// }
