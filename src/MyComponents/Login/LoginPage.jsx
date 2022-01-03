import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import Navbar from '../Navbar/Navbar';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/MyProfile');
    }
  }, []);

  async function login() {
    console.warn(email, password)
    let item = { email, password };
    let result = await fetch("http://localhost:4000/users/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(item)
    });
    // let result1 = result;
    // console.log("Result1 Is : " + result1);
    // result = await result.json();
    try {
      result = await result.json();
      localStorage.setItem("token", result.token)
      navigate('/MyProfile');
    } catch (err) {
      alert("Something Went Wrong Please Try Again...");
    }
    // console.log("Result Is : " + result);
    // if (result1.ok) {
    //   localStorage.setItem("token", result.token)
    //   navigate('/AboutUs');
    // }
    // else {
    //   alert("Something Went Wrong Please Try Again...");
    // }
    // localStorage.setItem("user-info",JSON.stringify(result))
  }
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div id="loginform">
        <form onSubmit={submitHandler} >
          <div>
            <h2 id="headerTitle">Sign In</h2>
          </div>

          <div>
            <div className="row">
              <label>Email ID</label>
              <input
                type="text"
                placeholder="Enter Your Email ID"
                name="email"
                onChange={(e) =>
                  setEmail(e.target.value)}
                required
              />
            </div>
            <div className="row">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={(e) =>
                  setPassword(e.target.value)}
                required
              />
            </div>

            <div id="button" class="row">
              <button onClick={login} type="submit" value="LoginPage">
                Sign In
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
    </>
  );



}





export default Login;
