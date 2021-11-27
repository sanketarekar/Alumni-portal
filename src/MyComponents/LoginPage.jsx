import React, { useState ,useEffect} from "react";
import {
  useHistory
} from 'react-router-dom';

import "./RegisterPage.css";



function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 
  async function login(){
    console.warn(email,password)
    let item={email,password};
    let result=await fetch("http://localhost:4000/users/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body:JSON.stringify(item)

    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
    
  };
    return (
    
      <div id="loginform">
      <form action="POST" onSubmit={submitHandler} >
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
                setEmail( e.target.value)}
              
              
            />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) =>
                setPassword(e.target.value )}
              
              
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
  );

    
      
    }
  

  
              

export default Login;
