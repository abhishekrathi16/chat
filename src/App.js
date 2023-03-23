import $ from "jquery";
import Sidepanel from "./components/Sidepanel";
function App() {
  return (
    <>
      <div>
        UserName:{" "}
        <input
          type="text"
          id="txtFromUserName"
          name="txtFromUserName"
          maxleng="50"
          // style="width:310px;"
          className="w-[310px]"
        />
        <button id="btnLogin">Login</button>
        <button id="btnLogout" disabled="disabled">
          Logout
        </button>
      </div>
      <div>
        Send To:{" "}
        <input
          type="text"
          id="txtToUserName"
          name="txtToUserName"
          readonly="readonly"
          maxleng="50"
          // style="width:230px;"
          className="w-[230px]"
        />
        ("Global" means sending to all)
      </div>
      <div>
        Message:{" "}
        <input
          type="text"
          id="txtMessage"
          name="txtMessage"
          readonly="readonly"
          maxleng="5000"
          // style="width:380px;"
          className="w-[380px]"
        />
        <button id="btnSend" disabled="disabled">
          Send
        </button>
      </div>
      <div>
        <fieldset>
          <legend>Received: </legend>
          <div id="divReceived"></div>
        </fieldset>
      </div>
    </>
  );
}

export default App;
