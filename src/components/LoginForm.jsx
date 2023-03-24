import { useState } from "react";

function LoginForm({ onLogin }) {
  const [userName, setUserName] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (!userName.trim()) {
      alert("Empty UserName");
      return;
    }
    onLogin(userName);
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        UserName:
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          maxLength="50"
          style={{ width: "310px" }}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
