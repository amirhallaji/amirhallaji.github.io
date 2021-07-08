import React from "react";

// Styles
import "./MainPage.css";

// Components
import { Button } from "antd";

const MainPage = () => {
  return (
    <div id="container">
      <div id="navbar">
        <a className='navbar-item'>Home</a>
        <a className='navbar-item'>About</a>
        <a className='navbar-item'>Experience</a>
        <a className='navbar-item'>Projects</a>
        <a className='navbar-item'>Skills</a>
        <a className='navbar-item'>Contact</a>
        <Button className='navbar-item' type='primary' shape='round'>Download CV</Button>
      </div>

      <div id="wrapper">
        <div id="wrapper-left">fff</div>
        <div id="wrapper-right" style={{minHeight:window.innerHeight}}>
          <div>
            home
          </div>
          <div>
            about
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
