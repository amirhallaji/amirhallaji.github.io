// Styles
import "./MainPage.css";

// Components
import { SocialIcon } from 'react-social-icons';


const MainPage = () => {

  const iconFunction = () => {
    let navbar = document.getElementById("navbar")
    let navbarIcon = document.getElementsByClassName("navbar-icon")[0]

    if (navbar.classList.contains("open")) {
      navbar.style.transform = `translateX(-100%)`
      navbarIcon.style.transform = `translateX(0)`
      navbar.classList.remove("open")
    }
    else {
      navbar.style.transform = "translateX(0)"
      navbarIcon.style.transform = `translateX(${navbar.offsetWidth}px)`
      navbar.classList.add("open")
    }
  };

  return (
    <div id="container">
        <a
          className="navbar-icon"
          onClick={iconFunction}
        >
          <i class="fa fa-bars"></i>
        </a>
        <div id="navbar">
          <a className="navbar-item" href="/" onClick={iconFunction}>
            Home
          </a>
          <a className="navbar-item" href="#About" onClick={iconFunction} >
            About
          </a>
          <a className="navbar-item" href="#Experience" onClick={iconFunction}>
            Experience
          </a>
          <a className="navbar-item" href="#Educations" onClick={iconFunction}>
            Educations
          </a>
          <a className="navbar-item" href="#Projects" onClick={iconFunction}>
            Projects
          </a>
          <a className="navbar-item" href="#Skills" onClick={iconFunction}>
            Skills
          </a>
          <a className="navbar-item" download
           href="https://github.com/amirhallaji/amirhallaji.github.io/tree/master/src/resume/amirhallaji.pdf" onClick={iconFunction}>
            Resume
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
                <h1 className="sections-headers" >About Me</h1>
                <p style={{fontSize:'25px'}}>Welcome to my website!</p>
                <p className="section-paragraphs">
                  My name is <span style={{color:'orange'}}>Amir Hallaji</span>. My friends call me Hallaji more than Amir. :))
                  
                  <hr />
                  I was born in Aran & Bidgol in Iran. I am 22 and now I'm living in Tehran. My favorite sport
                  is Soccer and Perepolis and Barcelona are my favorite teams. I also love snooker and my favorite player
                  is Judd Trump. I also love teaching and although I'm not a good teacher, but teaching makes me 
                  feel great.
                </p>
                <p>I love to learn and experience new things in this world. But this is just to the extent of loving. :)) </p>
              </div>

              <hr />

              <div className="sections" id='Experience'>
                <h1 className="sections-headers" >Experience</h1>
                <p className="sections-paragraphs">
                  <ul>
                    <li><strong style={{color:'#4da776'}}>Jan 2022 - Now: </strong>Software Engineer - Snapp Inc</li>
                    <li><strong style={{color:'#4da776'}}>July 2021 - August 2021: </strong>Programmer Internship -  Mavaratech Company</li>
                    <li><strong style={{color:'#4da776'}}>Jan 2020 - Now: </strong>Programmer Teacher -  Salam Tajrish High School</li>
                    <li><strong style={{color:'#4da776'}}>Aug 2019 - Sep 2019: </strong>Programmer Internship -  ToobaTech Company</li>
                  </ul>
                </p>
              </div>

              <hr />

              <div className="sections" id='Educations'>
                <h1 className="sections-headers" >Educations</h1>
                <p className="sections-paragraphs" >
                  <ul>
                    <li style={{color:'#4da776'}}>
                      MSc, Computer engineering, AI, Shahid Beheshti University
                    </li>
                    <li style={{color:'#4da776'}}>
                      Bsc, Computer engineering, Shahid Beheshti University
                    </li>
                    <li style={{color:'#4da776'}}>
                      Diploma, Mathematics & Physics, Salam Tajrish High school
                    </li>
                  </ul>
                </p>
              </div>

              <hr />

              <div className="sections" id='Projects'>
                <h1 className="sections-headers" >Projects</h1>
                <p className="sections-paragraphs" >
                  <p>These are some of my projects done in Shahid Beheshti University.</p>
                  <ul>
                    <li><a style={{color:'#4da776'}} className='project-links' href='https://github.com/AJob-Recommender/'>Linkedin Data Analysis, Predicting jobs based on people history</a></li>
                    <li><a style={{color:'#4da776'}} className='project-links' href='https://github.com/Idea-Thrive/'>Idea Thrive, Backend</a></li>
                    <li><a style={{color:'#4da776'}} className='project-links' href='https://github.com/amirhallaji/Computational-Intelligence'>Topic News Classification</a></li>
                    <li><a style={{color:'#4da776'}} className='project-links' href='https://github.com/amirhallaji/Artificial-Intelligence-assignments/tree/master/Project'>Language Detection</a></li>
                    <li><a style={{color:'#4da776'}} className='project-links' href='https://github.com/amirhallaji/Computational-Intelligence'>Dogs Breed Classification</a></li>
                    <li><a style={{color:'#4da776'}} className='project-links' href='https://github.com/amirhallaji/Beheshtray-Polling-System'>Beheshtray Polling System</a></li>
                  </ul>
                </p>
              </div>

              <hr />

              <div className="sections" id='Skills'>
                <h1 className="sections-headers" >Skills</h1>
                <p className="sections-paragraphs">
                  Tools and Technologies below are those which I have a little experience in working with.
                  I'm just a novice and not advanced using these tools, but I love to use them whenever needed.
                  <div className='sections-skills'>
                    <div>
                      <ul>
                        <li style={{color:'#4da776'}}>
                          Golang
                        </li>
                        <li style={{color:'#4da776'}}>
                          Python
                        </li>
                        <li style={{color:'#4da776'}}>
                          Java
                        </li>
                        <li style={{color:'#4da776'}}>
                          C, C++
                        </li>
                        <li style={{color:'#4da776'}}>
                          Docker
                        </li>
                        <li style={{color:'#4da776'}}>
                          Linux
                        </li>
                        <li style={{color:'#4da776'}}>
                          Machine Learning
                        </li>
                      </ul>
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
