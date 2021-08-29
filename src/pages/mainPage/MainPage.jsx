import {React, useState, useEffect} from "react";

// Styles
import "./MainPage.css";

// Components
import { Button } from "antd";
import {CircleProgress} from 'react-gradient-progress';
import { SocialIcon } from 'react-social-icons';

// Assets
import BackToTop from '../../images/backtotop.png';

const MainPage = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    document.querySelector("#wrapper-right").addEventListener("scroll", onScroll);
    return () => {
    document.querySelector("#wrapper-right").removeEventListener("scroll", onScroll);
    }

  }, []) 

  const onScroll = () => {
    setIsScrolling(true);

    setTimeout(() => {
      setIsScrolling(false);
    }, 200)
  }


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
        <a download><Button
              type="primary"
              href='https://github.com/amirhallaji/amirhallaji.github.io/tree/master/src/resume/amirhallaji.pdf'
              shape="round"
              target='_blank'
              className='navbar-item'
            >
              Download CV
            </Button></a>
        <a
          className="navbar-icon"
          href="javascript:void(0)"
          onClick={iconFunction}
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>

      <div id="wrapper">
        <div id="wrapper-left" >
          <div className='section-socialmedia'>
            <SocialIcon className='sections-socialmedia-items' target='_blank' url="https://twitter.com/amirhallaji_" />
            <SocialIcon className='sections-socialmedia-items' target='_blank' url='https://instagram.com/amirhallaji'/>
            <SocialIcon className='sections-socialmedia-items' target='_blank' url='https://github.com/amirhallaji'/>
            <SocialIcon className='sections-socialmedia-items' target='_blank' url='https://linkedin.com/in/amirhallaji'/>
            <SocialIcon className='sections-socialmedia-items' target='_blank' url='mailto:a.hallaji.b@gmail.com'/>
          </div>
        </div>
        <div id="wrapper-right">
          <div className="sections" id='About'>
            <h1 className="sections-headers" >About</h1>
            <p style={{fontSize:'25px'}}>Welcome to my website!</p>
            <p className="section-paragraphs">
              I am <span style={{color:'orange'}}>Amir Hallaji</span>, a B.SC student studying computer Engineering at Shahid
              Beheshti University.
            </p>
            <p>I love to learn and experience new things in this world.</p>
          </div>

          <hr />

          <div className="sections" id='Experience'>
            <h1 className="sections-headers" >Experience</h1>
            <p className="sections-paragraphs">
              <ul>
                <li><strong style={{color:'orange'}}>July 2021 - August 2021: </strong>Programmer Internship -  Mavaratech Company</li>
                <li><strong style={{color:'orange'}}>Jan 2020 - Now: </strong>Programmer Teacher -  Salam Tajrish High School</li>
                <li><strong style={{color:'orange'}}>Aug 2019 - Sep 2019: </strong>Programmer Internship -  ToobaTech Company</li>
              </ul>
            </p>
          </div>

          <hr />

          <div className="sections" id='Projects'>
            <h1 className="sections-headers" >Projects</h1>
            <p className="sections-paragraphs" >
              <p>These are some of my projects done in Shahid Beheshti University.</p>
              <ul>
                <li><a style={{color:'orange'}} className='project-links' href='https://github.com/amirhallaji/Computational-Intelligence'>Topic News Classification</a></li>
                <li><a style={{color:'orange'}} className='project-links' href='https://github.com/amirhallaji/Artificial-Intelligence-assignments/tree/master/Project'>Language Detection</a></li>
                <li><a style={{color:'orange'}} className='project-links' href='https://github.com/amirhallaji/Classroom-Android_part'>Google Classroom</a></li>
                <li><a style={{color:'orange'}} className='project-links' href='https://github.com/amirhallaji/Computational-Intelligence'>Dogs Breed Classification</a></li>
                <li><a style={{color:'orange'}} className='project-links' href='https://github.com/amirhallaji/Beheshtray-Polling-System'>Beheshtray Polling System</a></li>

              </ul>
            </p>
          </div>

          <hr />

          <div className="sections" id='Skills'>
            <h1 className="sections-headers" >Skills</h1>
            <p className="sections-paragraphs">
              <div className='sections-skills'>

                
              <div className='sections-skills-items'> Teaching
              <CircleProgress percentage={70} strokeWidth={8} width={'130'} primaryColor={['white', 'orange']}  />
              </div>

              <div className='sections-skills-items'>React JS
              <CircleProgress percentage={65} strokeWidth={8} width={'130'} primaryColor={['white', 'orange']}  />
              </div>

              <div className='sections-skills-items'> Machine Learning
              <CircleProgress percentage={65} strokeWidth={8} width={'130'} primaryColor={['white', 'orange']} />
              </div>

              <div className='sections-skills-items'> Python
              <CircleProgress percentage={70} strokeWidth={8} width={'130'} primaryColor={['white', 'orange']} />
              </div>

              <div className='sections-skills-items'> C, C++
              <CircleProgress percentage={65} strokeWidth={8} width={'130'} primaryColor={['white', 'orange']} />
              </div>


              <div className='sections-skills-items'> Java
              <CircleProgress percentage={84} strokeWidth={8} width={'130'} primaryColor={['white', 'orange']} />
              </div>

              </div>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainPage;
