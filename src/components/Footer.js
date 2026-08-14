import "../styles/Footer.css";
import logo from "../assets/images/logo-orange-black.svg";
import Button from "./Button";

const scrollToSection = (className) => {
  document
    .getElementsByClassName(className)[0]
    .scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="footer section">
      <section className="footerFirstSection">
        <img src={logo} alt="Amir Hallaji" />
        <p>Dreams come true ...</p>
      </section>
      <section className="footerSecondSection">
        <section className="footerSections">
          <header>Sections</header>
          <nav>
            <ul>
              <li onClick={() => scrollToSection("education")}>Education</li>
              <li onClick={() => scrollToSection("publications")}>
                Publications
              </li>
              <li onClick={() => scrollToSection("experiences")}>
                Experiences
              </li>
              <li onClick={() => scrollToSection("certifications")}>
                Certifications
              </li>
              <li onClick={() => scrollToSection("projects")}>Projects</li>
              <li onClick={() => scrollToSection("about")}>About</li>
              <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
          </nav>
        </section>
        <Button
          href="https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/resume/amirhallaji.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </Button>
      </section>
    </footer>
  );
};

export default Footer;
