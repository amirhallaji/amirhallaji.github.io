import Button from "./Button";
import "../styles/SideMenu.css";
import xmark from "../assets/images/xmark-solid.svg";

const SideMenu = (props) => {
  return (
    <div className={`sideMenu${props.isSideMenuOpen ? " open" : ""}`}>
      <img
        src={xmark}
        alt="xmark"
        className="sideMenuXmark"
        onClick={() => props.setIsSideMenuOpen(false)}
      />
      <nav className="sideMenuNav">
        <ul>
          <li
            onClick={() => {
              props.setIsSideMenuOpen(false);
              document
                .getElementsByClassName("education")[0]
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Education
          </li>
          <li
            onClick={() => {
              props.setIsSideMenuOpen(false);
              document
                .getElementsByClassName("experiences")[0]
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experiences
          </li>
          <li
            onClick={() => {
              props.setIsSideMenuOpen(false);
              document
                .getElementsByClassName("certifications")[0]
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Certifications
          </li>
          <li
            onClick={() => {
              props.setIsSideMenuOpen(false);
              document
                .getElementsByClassName("projects")[0]
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              props.setIsSideMenuOpen(false);
              document
                .getElementsByClassName("about")[0]
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              props.setIsSideMenuOpen(false);
              document
                .getElementsByClassName("contact")[0]
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
      <Button>Download CV</Button>
    </div>
  );
};

export default SideMenu;
