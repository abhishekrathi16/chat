import React, { useEffect, useState } from "react";
let CryptoJS = require("crypto-js");
const aesKey = "0ca175b9c0f726a831d895e269332461";

function WebSocketComponent({ url }) {
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
  const [ws, setWs] = useState(null);
  const [users, setUsers] = useState([]);
  const [globalIndex, setGlobalIndex] = useState(null);
  const [messages, setMessages] = useState([]);
  const [fromUserName, setFromUserName] = useState("");
  function handleInputChange(event) {
    setFromUserName(event.target.value.trim());
  }
  useEffect(() => {
    const initWebSocket = () => {
      if ("WebSocket" in window) {
        const websocket = new WebSocket(url);

        websocket.onopen = () => {
          console.log("Connection open");
        };

        websocket.onmessage = (evt) => {
          const plain = decrypt(evt.data);
          const json = JSON.parse(plain);
          setUsers(json);
          if (json.Method === "Login") {
            setGlobalIndex(json.GlobalIndex);
            return;
          }
          if (
            json.Messages &&
            json.Messages.length > 0 &&
            json.Messages[0].Id &&
            json.Messages[0].ToUserName === "Global"
          ) {
            const reqConfirm = {
              Method: "Confirm",
              FromUserName: fromUserName,
              IdList: [json.Messages[0].Id],
            };
            const plain = JSON.stringify(reqConfirm);
            const secret = encrypt(plain);
            websocket.send(secret);
          }
        };

        websocket.onclose = () => {
          console.log("Connection closed");
          setTimeout(initWebSocket, 3000);
        };

        setWs(websocket);
      } else {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
      }
    };

    initWebSocket();
  }, [url]);

  return (
    <div id="divReceived">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <input
        type="text"
        id="txtFromUserName"
        value={fromUserName}
        onChange={handleInputChange}
      />
    </div>
  );
}
export default WebSocketComponent;
