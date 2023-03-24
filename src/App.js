import $ from "jquery";
import Chatwindow from "./components/Chatwindow";
import Sidepanel from "./components/Sidepanel";
import WebSocketComponent from "./components/WebSocketComponent";

const aesKey = "0ca175b9c0f726a831d895e269332461";
const url = "ws://103.125.147.18:54182";
let CryptoJS = require("crypto-js");
function encrypt(plain) {
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const encryptedData = CryptoJS.AES.encrypt(plain, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Hex.parse(encryptedData.ciphertext.toString())
  );
}

function decrypt(secret) {
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const decryptedData = CryptoJS.AES.decrypt(secret, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decryptedData.toString(CryptoJS.enc.Utf8);
}

let ws;
const globalIndex = 0;

// function App() {
//   return (
//     <>
//       <div>
//         UserName:{" "}
//         <input
//           type="text"
//           id="txtFromUserName"
//           name="txtFromUserName"
//           maxleng="50"
//           // style="width:310px;"
//           className="w-[310px]"
//         />
//         <button id="btnLogin">Login</button>
//         <button id="btnLogout" disabled="disabled">
//           Logout
//         </button>
//       </div>
//       <div>
//         Send To:{" "}
//         <input
//           type="text"
//           id="txtToUserName"
//           name="txtToUserName"
//           readonly="readonly"
//           maxleng="50"
//           // style="width:230px;"
//           className="w-[230px]"
//         />
//         ("Global" means sending to all)
//       </div>
//       <div>
//         Message:{" "}
//         <input
//           type="text"
//           id="txtMessage"
//           name="txtMessage"
//           readonly="readonly"
//           maxleng="5000"
//           // style="width:380px;"
//           className="w-[380px]"
//         />
//         <button id="btnSend" disabled="disabled">
//           Send
//         </button>
//       </div>
//       <div>
//         <fieldset>
//           <legend>Received: </legend>
//           <div id="divReceived"></div>
//         </fieldset>
//       </div>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <div className="flex">
//         <div className="overflow-y-hidden">
//           <Sidepanel />
//         </div>
//         <Chatwindow />
//       </div>
//     </>
//   );
// }

const App = () => {
  return (
    <>
      <WebSocketComponent url={url} />
    </>
  );
};

export default App;

// export { users };
