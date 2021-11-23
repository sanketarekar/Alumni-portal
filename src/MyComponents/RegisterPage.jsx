import React from 'react'
import "./RegisterPage.css";

export default function RegisterPage() {
  return (
    <div id="loginform">
      <form action="POST">
        <div>
          <h2 id="headerTitle">Sign Up</h2>
        </div>
        <div>
          <div className="row">
            <label>First Name</label>
            <input type="text" placeholder="Enter Your First Name" name="email" required />
          </div>
          <div className="row">
            <label>Last Name</label>
            <input type="text" placeholder="Enter Your Last Name" name="email" required />
          </div>
          <div className="row">
            <label>Email ID</label>
            <input type="email" placeholder="Enter Your Email ID" name="email" required />
          </div>
          <div className="row">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter Your Password" required />
          </div>
          <div id="button" class="row">
            <button type="submit" value="LoginPage">Sign Up</button>
          </div>
        </div>
      </form>
      <div id="alternativeLogin">
        <label>Or Sign Up with:</label>
        <div id="iconGroup">
          <a href="/" id="googleIcon" />
        </div>
      </div>
    </div>
  )
}
