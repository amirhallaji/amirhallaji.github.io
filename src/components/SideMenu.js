import Button from "./Button";
import "../styles/SideMenu.css";
import xmark from "../assets/images/xmark-solid.svg";
import SiteNav from "./SiteNav";

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
        href="https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/resume/amirhallaji.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </Button>
    </div>
  );
};

export default SideMenu;
