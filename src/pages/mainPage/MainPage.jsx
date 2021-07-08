import React from "react";

// Styles
import "./MainPage.css";

// Components
import { Button } from "antd";

const MainPage = () => {
  return (
    <div id="container">
      <div id="navbar">
        <a className="navbar-item" href="/">
          Home
        </a>
        <a className="navbar-item" href="#About">
          About
        </a>
        <a className="navbar-item" href="#Experience">
          Experience
        </a>
        <a className="navbar-item" href="#Projects">
          Projects
        </a>
        <a className="navbar-item" href="#Skills">
          Skills
        </a>
        <a className="navbar-item" href="#Resume">
          Resume
        </a>
        <a className="navbar-item" href="#Contact">
          Contact
        </a>
        {/* <Button className='navbar-item' type='primary' shape='round'>Download CV</Button> */}
      </div>

      <div id="wrapper">
        <div id="wrapper-left"></div>
        <div id="wrapper-right" style={{ minHeight: window.innerHeight }}>
          <div className="sections">
            <h1 className="sections-headers">About</h1>
            <p>
              I am a B.SC student studying computer Engineering at Shahid
              Beheshti University.I am a B.SC student studying computer
              Engineering at Shahid Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>

          <div className="sections">
            <h1 className="sections-headers">Experience</h1>
            <p>
              I am a B.SC student studying computer Engineering at Shahid
              Beheshti University.I am a B.SC student studying computer
              Engineering at Shahid Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>

          <div className='sections'>
            <h1 className='sections-headers'>Projects</h1>
            <p>I am a B.SC student studying computer Engineering at Shahid Beheshti University.I am a B.SC student studying computer Engineering at Shahid Beheshti University.</p>
            <p>I love to learn and experience new things in this world.</p>
          </div>


          <div className="sections">
            <h1 className="sections-headers">Skills</h1>
            <p>
              I am a B.SC student studying computer Engineering at Shahid
              Beheshti University.I am a B.SC student studying computer
              Engineering at Shahid Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>

          <div className="sections">
            <h1 className="sections-headers">Resume</h1>
            <p>
              I am a B.SC student studying computer Engineering at Shahid
              Beheshti University.I am a B.SC student studying computer
              Engineering at Shahid Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>

          <div className="sections">
            <h1 className="sections-headers">Contact</h1>
            <p>
              I am a B.SC student studying computer Engineering at Shahid
              Beheshti University.I am a B.SC student studying computer
              Engineering at Shahid Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
