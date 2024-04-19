import React from "react";

export default function Login() {
  return (
    <div className="container">
      <div className="header">
        <div className="Text"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="email" />
        </div>
        <div className="input">
          <input type="password" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Sign up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
}
