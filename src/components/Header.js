import hamburgerMenu from "../assets/images/bars-solid.svg";
import "../styles/Header.css";
import Button from "./Button";
import Logo from "./Logo";
import SiteNav from "./SiteNav";
import { resumePagePath } from "../lib/resume";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      <div className="headerLogo">
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>
      </div>
      <img
        src={hamburgerMenu}
        alt="hamburger menu"
        className="headerMenu"
        onClick={() => props.setIsSideMenuOpen(true)}
      />
      <nav className="headerNav">
        <SiteNav />
      </nav>
      <Button to={resumePagePath}>Resume</Button>
    </header>
  );
};

export default Header;
