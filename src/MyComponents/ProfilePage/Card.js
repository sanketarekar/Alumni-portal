import React from 'react'
import "./Card.css";
import "./CardTab.css";
import "./CardMobile.css";
import "./ProfileTab.css";
import userImg from './user.png';

export default function Card() {
  return (
    <div className="cardOut">
      <img src={userImg} className="cardImg" />
      <div className="cardContent">
        <div className="postHeading">Post Heading: This Is First Post</div>
        <div className="postTextContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, animi! Lorem ipsum dolor sit amet.</div>
        <button className="postDetailsBtn">View Complete Post</button>
      </div>
    </div>
  )
}
