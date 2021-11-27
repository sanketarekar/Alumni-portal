import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./RegisterPage.css";

export default function RegisterPage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  async function signUp() {
    let item = { name, email, password }
    // console.log(item);

    let result = await fetch("http://localhost:4000/users", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    // console.log(result);
    let result1 = result;
    result = await result.json()
    if (result1.ok) {
      alert("Registration Done");
      localStorage.setItem("token", result.token)
      navigate('/AboutUs');
    }
    else {
      alert("Something Went Wrong Please Try Again...");
    }
    console.log(result);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div id="loginform">
      <form onSubmit={submitHandler}>
        <div>
          <h2 id="headerTitle">Sign Up</h2>
        </div>
        <div>
          <div className="row">
            <label>First Name</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" required />
          </div>
          <div className="row">
            <label>Email ID</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email ID" required />
          </div>
          <div className="row">
            <label>Password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" required />
          </div>
          <div id="button" class="row">
            <button type="submit" value="LoginPage" onClick={signUp}>Sign Up</button>
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
