import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import Out from "../MyComponents/Out";
import "./Profile.css";
import "./ProfileTab.css";
import "./ProfileMobile.css";
import Card from "./Card";
import "./Card.css";
import "./CardTab.css";
import "./CardMobile.css";
import userImg from './user.png';
import editLogo from './edit.svg';
import Navbar from '../Navbar';

export default function Profile() {
  let myName = '';
  async function MyProfileFunc() {
    var token = localStorage.getItem("token");
    let myProfile = await fetch("http://localhost:4000/users/me", {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${token}`,
        // "Accept": 'application/json'
      }
    });
    var myProfile1 = await myProfile.json();
    // console.log(myProfile1);
    myName = myProfile1.name;
    console.log(myName);
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
    MyProfileFunc();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profileOut">
        <div className="personalInfoOut">
          <div className="personalInfo">
            <img src={userImg} className="userImgStyle" alt="" />
            <div className="userName">{myName}</div>
            <div className="userShortDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus neque totam adipisci corrupti</div>
          </div>
          <div className="belowPersonalInfo">
            <div className="belowNavOptions">
              <img className="belowNavOptionsImg" src={editLogo} alt="" />
              <a href="#" className="belowNavOptionsText">Edit Profile</a>
            </div>
          </div>
        </div>
        <div className="contentOut">
          <div className="content">
            <div className="contentHeading">Personal Information</div>
            <div className="contentOptions">First Name: FirstName</div>
            <div className="contentOptions">Last Name: LastName</div>
            <div className="contentOptions">Country: Country</div>
            <div className="contentOptions">City: City</div>
            <div className="contentOptions">Date Of Birth: 00/00/0000</div>
            <div className="contentOptions">Age: 00</div>
            <div className="contentOptions">Past Country/Countries: Country</div>
            <div className="contentOptions">Past City/Cities: City</div>
          </div>
          <div className="content">
            <p className="contentHeading">Education</p>
            <p className="contentOptions">U.G.: Under Graduate</p>
            <p className="contentOptions">P.G.: Post Graduate</p>
            <p className="contentOptions">PhD: Doctor of Philosophy</p>
            <p className="contentOptions">12th / Polytechnic: Both</p>
            {/* <p className="contentOptions">First Name: FirstName</p>
          <p className="contentOptions">First Name: FirstName</p>
          <p className="contentOptions">First Name: FirstName</p>
          <p className="contentOptions">First Name: FirstName</p> */}
          </div>
          <div className="content">
            <div className="contentHeading">Profession</div>
            <div className="contentOptions">Field Of Profession: Field</div>
            <div className="contentOptions">Years Of Experience In Current Field: 00</div>
            <div className="contentOptions">Profession: Profession</div>
            <div className="contentOptions">Organization: Organization</div>
            <div className="contentOptions">Past Field(s) Of Profession: Field</div>
            <div className="contentOptions">Years Of Experience In Past Field(s): 00</div>
            <div className="contentOptions">Past Profession(s): Profession</div>
            <div className="contentOptions">Past Organization(s): Organization</div>
          </div>
          <div className="postSection">
            <div className="contentHeading contentHeading1">
              <div>Posts</div>
              <button className="createPost">Create Post +</button>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}
