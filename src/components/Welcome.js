import React from "react";
import "../styles/Welcome.css";

const Welcome = ({ username }) => (
  <div className="Container">
    <div className="Fitness-User-Info">
      <h1>Hello {username}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur</p>
    </div>
  </div>
);

export default Welcome;
