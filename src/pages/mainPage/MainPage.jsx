import React from "react";

// Styles
import "./MainPage.css";

// Components
import { Button } from "antd";


const MainPage = () => {

  const iconFunction = () => {
    let x = document.getElementById("navbar");
    if (x.className === "") {
      x.classList.add('responsive');
    } else {
      x.classList.remove('responsive');
    }
  };

  const disappearNav = () => {
    let x = document.getElementById("navbar");
    if (x.className === 'responsive')
      x.classList.remove('responsive');
  };

  return (
    <div id="container">
      <div id="navbar">
        <a className="navbar-item" href="/" onClick={disappearNav}>
          Home
        </a>
        <a className="navbar-item" href="#About" onClick={disappearNav} >
          About
        </a>
        <a className="navbar-item" href="#Experience" onClick={disappearNav}>
          Experience
        </a>
        <a className="navbar-item" href="#Projects" onClick={disappearNav}>
          Projects
        </a>
        <a className="navbar-item" href="#Skills" onClick={disappearNav}>
          Skills
        </a>
        <a className="navbar-item" href="#Resume" onClick={disappearNav}>
          Resume
        </a>
        <a className="navbar-item" href="#Contact" onClick={disappearNav}>
          Contact
        </a>
        <a
          className="navbar-icon"
          href="javascript:void(0)"
          onClick={iconFunction}
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>

      <div id="wrapper">
        <div id="wrapper-left" ></div>
        <div id="wrapper-right">
          <div className="sections" id='About'>
            <h1 className="sections-headers" >About</h1>
            <p className="section-paragraphs">
              I am a B.SC student studying computer Engineering at Shahid
              Beheshti University.I am a B.SC student studying computer
              Engineering at Shahid Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>

          <hr />

          <div className="sections" id='Experience'>
            <h1 className="sections-headers" >Experience</h1>
            <p className="sections-paragraphs">
              <ul>
                <li><strong>July 2021 - now </strong>Programmer Internship -  Mavaratech Company</li>
                <li><strong>Aug 2019 - Sep 2019 </strong>Programmer Internship -  ToobaTech Company</li>
              </ul>
            </p>
          </div>

          <hr />

          <div className="sections" id='Projects'>
            <h1 className="sections-headers" >Projects</h1>
            <p className="sections-paragraphs" >
              <ul>
                <li><a href='https://github.com/amirhallaji/Computational-Intelligence'>Topic News Classification</a></li>
                <li><a href='https://github.com/amirhallaji/Artificial-Intelligence-assignments/tree/master/Project'>Language Detection</a></li>
                <li><a href='https://github.com/amirhallaji/Classroom-Android_part'>Google Classroom</a></li>
                <li><a href='https://github.com/amirhallaji/Computational-Intelligence'>Dogs Breed Classification</a></li>
                <li><a href='https://github.com/amirhallaji/Beheshtray-Polling-System'>Beheshtray Polling System</a></li>

              </ul>
            </p>
          </div>

          <hr />

          <div className="sections" id='Skills'>
            <h1 className="sections-headers" >Skills</h1>
            <p className="sections-paragraphs">
              I am a B.SC student studying computer Engineering at Shahid
              Beheshti University.I am a B.SC student studying computer
              Engineering at Shahid Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>

          <hr />

          <div className="sections" id='Resume'>
            <h1 className="sections-headers" >Resume</h1>
            <p className="sections-paragraphs">
              Press the button to Download my CV.
            </p>
            <a><Button
              type="primary"
              href='https://github.com/amirhallaji/amirhallaji.github.io/tree/master/src/resume/amirhallaji.pdf'
              shape="round"
            >
              Download CV
            </Button></a>
          </div>

          <hr />

          <div className="sections" id='Contact'>
            <h1 className="sections-headers" >Contact</h1>
            <p className="sections-paragraphs" >
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
