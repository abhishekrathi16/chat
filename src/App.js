import $ from "jquery";
import Sidepanel from "./components/Sidepanel";
var CryptoJS = require("crypto-js");

var aesKey = '0ca175b9c0f726a831d895e269332461';
        function encrypt(plain) {
            var key = CryptoJS.enc.Utf8.parse(aesKey);
            var encryptedData = CryptoJS.AES.encrypt(plain, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(encryptedData.ciphertext.toString()));
        }
        function decrypt(secret) {
            var key = CryptoJS.enc.Utf8.parse(aesKey);
            var decryptedData = CryptoJS.AES.decrypt(secret, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            return decryptedData.toString(CryptoJS.enc.Utf8);            
        }

        var url = 'ws://103.125.147.18:54182';
        var ws;
        var globalIndex = 0;
        function initWebSocket() {
            if ("WebSocket" in window) {
                ws = new WebSocket(url);

                ws.onopen = function () {
                    $('#divReceived').append('<p>Connection open</p>');
                };

                ws.onmessage = function (evt) {
                    var plain = decrypt(evt.data);
                    $('#divReceived').append('<p>' + plain + '</p>');
                    var json = JSON.parse(plain);
                    if (json.Method == 'Login') {
                        globalIndex = json.GlobalIndex;
                        return;
                    }
                    if (json.Messages &&
                        json.Messages.length > 0 &&
                        json.Messages[0].Id &&
                        json.Messages[0].ToUserName == 'Global') {
                        var fromUserName = $.trim($('#txtFromUserName').val());
                        var reqConfirm = {
                            Method: "Confirm",
                            FromUserName: fromUserName,
                            IdList: [json.Messages[0].Id]
                        };
                        var plain = JSON.stringify(reqConfirm);
                        var secret = encrypt(plain);
                        ws.send(secret);
                    }
                };

                ws.onclose = function () {
                    $('#divReceived').append('<p>Connection closed</p>');                    
                    setTimeout(initWebSocket, 3000);
                };
            }
            else {

                // The browser doesn't support WebSocket
                alert("WebSocket NOT supported by your Browser!");
            }
        }

        $(function () {
            initWebSocket();

            $('#btnLogin').click(function () {
                var fromUserName = $.trim($('#txtFromUserName').val());
                if (!fromUserName) {
                    alert('Empty UserName');
                    return;
                }
                var reqLogin = {
                    Method: "Login",
                    FromUserName: fromUserName,
                    GlobalIndex: globalIndex
                };
                var plain = JSON.stringify(reqLogin);
                var secret = encrypt(plain);
                ws.send(secret);
                $('#txtFromUserName').attr('readonly', 'readonly');
                $('#txtToUserName').removeAttr('readonly');
                $('#txtMessage').removeAttr('readonly');
                $('#btnLogin').attr('disabled', 'disabled');
                $('#btnLogout').removeAttr('disabled');
                $('#btnSend').removeAttr('disabled');
            });

            $('#btnLogout').click(function () {
                var fromUserName = $.trim($('#txtFromUserName').val());
                var reqLogout = {
                    Method: "Logout",
                    FromUserName: fromUserName
                };
                var plain = JSON.stringify(reqLogout);
                var secret = encrypt(plain);
                ws.send(secret);
                $('#txtFromUserName').removeAttr('readonly');
                $('#txtToUserName').attr('readonly', 'readonly');
                $('#txtMessage').attr('readonly', 'readonly');
                $('#btnLogin').removeAttr('disabled');
                $('#btnLogout').attr('disabled', 'disabled');
                $('#btnSend').attr('disabled', 'disabled');
            });

            $('#btnSend').click(function () {
                var toUserName = $.trim($('#txtToUserName').val());
                if (!toUserName) {
                    alert('Empty ToUserName');
                    return;
                }
                var message = $.trim($('#txtMessage').val());
                if (!message) {
                    alert('Empty Message');
                    return;
                }
                var fromUserName = $.trim($('#txtFromUserName').val());
                var reqSend = {
                    Method: "Send",
                    FromUserName: fromUserName,
                    ToUserNameList: toUserName.split(','),
                    Content: message
                };
                var plain = JSON.stringify(reqSend);
                var secret = encrypt(plain);
                ws.send(secret);
            });
        });

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
