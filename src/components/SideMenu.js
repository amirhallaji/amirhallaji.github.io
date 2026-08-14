import Button from "./Button";
import "../styles/SideMenu.css";
import xmark from "../assets/images/xmark-solid.svg";
import SiteNav from "./SiteNav";
import { resumePagePath } from "../lib/resume";

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
        <SiteNav onNavigate={() => props.setIsSideMenuOpen(false)} />
      </nav>
      <Button
        to={resumePagePath}
        onClick={() => props.setIsSideMenuOpen(false)}
      >
        Download Resume
      </Button>
    </div>
  );
};

export default SideMenu;
