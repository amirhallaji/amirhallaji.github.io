import logo from "../assets/images/logo-white-orange.svg";
import hamburgerMenu from "../assets/images/bars-solid.svg";
import "../styles/Header.css";
import Button from "./Button";
import { useEffect, useRef } from "react";

const Header = (props) => {
  const headerRef = useRef();

  useEffect(() => {
    let prevScroll = 0;
    const handleScroll = () => {
      if (window.scrollY > headerRef.current.clientHeight) {
        if (window.scrollY > prevScroll) {
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      prevScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="section header" ref={headerRef}>
      <img src={logo} alt="logo" className="headerLogo" />
      <img
        src={hamburgerMenu}
        alt="hamburger menu"
        className="headerMenu"
        onClick={() => props.setIsSideMenuOpen(true)}
      />
      <nav className="headerNav">
        <ul>
          <li
            onClick={() =>
              document
                .getElementsByClassName("education")[0]
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Education
          </li>
          <li
            onClick={() =>
              document
                .getElementsByClassName("experiences")[0]
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experiences
          </li>
          <li
            onClick={() =>
              document
                .getElementsByClassName("certifications")[0]
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Certifications
          </li>
          <li
            onClick={() =>
              document
                .getElementsByClassName("projects")[0]
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
          <li
            onClick={() =>
              document
                .getElementsByClassName("about")[0]
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
          <li
            onClick={() =>
              document
                .getElementsByClassName("contact")[0]
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </li>
        </ul>
      </nav>
      <Button>Download CV</Button>
    </header>
  );
};

export default Header;
