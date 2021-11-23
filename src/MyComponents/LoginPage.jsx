import React, { useState } from "react";

import "./LoginPage.css";

const LoginPage = ({ login, error }) => {
  const [details, setdetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  return (
    <div id="loginform">
      <form action="POST" onSubmit={submitHandler}>
        <div>
          <h2 id="headerTitle">Login</h2>
        </div>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div>
          <div className="row">
            <label>UserName</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              name="email"
              onChange={(e) =>
                setdetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) =>
                setdetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>

          <div id="button" class="row">
            <button type="submit" value="LoginPage">
              Login
            </button>
          </div>
        </div>
      </form>
      <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
          <a href="/" id="googleIcon" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
