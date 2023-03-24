import React, { useState, useEffect } from "react";

const InitWebSocket = () => {
  const [fromUserName, setFromUserName] = useState("");
  const [toUserName, setToUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    initWebSocket();
  }, []);

  function handleLogin() {
    var trimmedUserName = fromUserName.trim();
    if (!trimmedUserName) {
      alert("Empty UserName");
      return;
    }
    var reqLogin = {
      Method: "Login",
      FromUserName: trimmedUserName,
      GlobalIndex: globalIndex,
    };
    var plain = JSON.stringify(reqLogin);
    var secret = encrypt(plain);
    ws.send(secret);
    setFromUserName(trimmedUserName);
    document.getElementById("txtFromUserName").readOnly = true;
    document.getElementById("txtToUserName").readOnly = false;
    document.getElementById("txtMessage").readOnly = false;
    document.getElementById("btnLogin").disabled = true;
    document.getElementById("btnLogout").disabled = false;
    document.getElementById("btnSend").disabled = false;
  }

  function handleLogout() {
    var reqLogout = {
      Method: "Logout",
      FromUserName: fromUserName,
    };
    var plain = JSON.stringify(reqLogout);
    var secret = encrypt(plain);
    ws.send(secret);
    setFromUserName("");
    setToUserName("");
    setMessage("");
    document.getElementById("txtFromUserName").readOnly = false;
    document.getElementById("txtToUserName").readOnly = true;
    document.getElementById("txtMessage").readOnly = true;
    document.getElementById("btnLogin").disabled = false;
    document.getElementById("btnLogout").disabled = true;
    document.getElementById("btnSend").disabled = true;
  }

  function handleSend() {
    var trimmedToUserName = toUserName.trim();
    if (!trimmedToUserName) {
      alert("Empty ToUserName");
      return;
    }
    var trimmedMessage = message.trim();
    if (!trimmedMessage) {
      alert("Empty Message");
      return;
    }
    var reqSend = {
      Method: "Send",
      FromUserName: fromUserName,
      ToUserNameList: trimmedToUserName.split(","),
      Content: trimmedMessage,
    };
    var plain = JSON.stringify(reqSend);
    var secret = encrypt(plain);
    ws.send(secret);
  }

  return (
    <div>
      <input
        type="text"
        id="txtFromUserName"
        value={fromUserName}
        onChange={(e) => setFromUserName(e.target.value)}
      />
      <button onClick={handleLogin} id="btnLogin">
        Login
      </button>
      <button onClick={handleLogout} id="btnLogout" disabled>
        Logout
      </button>
      <input
        type="text"
        id="txtToUserName"
        value={toUserName}
        onChange={(e) => setToUserName(e.target.value)}
        readOnly
      />
      <textarea
        id="txtMessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        readOnly
      />
      <button onClick={handleSend} id="btnSend" disabled>
        Send
      </button>
    </div>
  );
};

export default InitWebSocket;
