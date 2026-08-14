import "../styles/Footer.css";
import Button from "./Button";
import Logo from "./Logo";
import SiteNav from "./SiteNav";
import { resumePagePath } from "../lib/resume";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer section">
      <section className="footerFirstSection">
        <Link to="/" aria-label="Home">
          <Logo variant="light" />
        </Link>
        <p>Dreams come true ...</p>
      </section>
      <section className="footerSecondSection">
        <section className="footerSections">
          <header>Sections</header>
          <nav>
            <SiteNav />
          </nav>
        </section>
        <Button to={resumePagePath}>Download Resume</Button>
      </section>
    </footer>
  );
};

export default Footer;
