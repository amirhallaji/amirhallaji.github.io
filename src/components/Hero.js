import amirHallaji from "../assets/images/amirhallaji.webp";
import "../styles/Hero.css";
import Button from "./Button";
import { useGoToSection } from "./SiteNav";
import { resumePagePath } from "../lib/resume";

const Hero = () => {
  const goToSection = useGoToSection();

  return (
    <section className="hero section">
      <div className="heroImageWrapper">
        <img
          src={amirHallaji}
          alt="Amir Hallaji"
          className="heroImage"
          width={800}
          height={1000}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <main className="heroMain">
        <p className="heroEyebrow">Senior ML Engineer at Snapp</p>
        <h1>My name is Amir.</h1>
        <h2>
          I work on LLMs and deep learning, build scalable software, and
          research drug–target interaction with protein and molecule language
          models.
        </h2>
        <div className="heroActions">
          <Button to={resumePagePath}>Download Resume</Button>
          <Button
            className="buttonGhost"
            onClick={() => goToSection("publications")}
          >
            Publications
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Hero;
