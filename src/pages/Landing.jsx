import React from "react";
import "../css/LandingStyle.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  const goLogin = () => {
    console.log("heloo");
    navigate("/login_signup");
  };

  return (
    <div className="wrapper">
      <div className="header">
        <img src="cloud.png" className="background" />
        <img src="paper.png" className="foreground" />
        <h1 className="title">Welcome To Future Letter</h1>
      </div>
      <button type="submit" className="login-btn" onClick={goLogin}>
        <img src="mailbox.png" className="w-12 mr-6" />
        Send a letter
      </button>

      <img src="paper.png" className="foreground" />
      <img src="paper.png" className="foreground" />
      <h1 className="tagline">A Time Capsule for Your Thoughts.</h1>
    </div>
  );
};

export default Landing;
