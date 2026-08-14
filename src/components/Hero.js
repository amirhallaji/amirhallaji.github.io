import amirHallaji from "../assets/images/amirhallaji.jpg";
import "../styles/Hero.css";
import Button from "./Button";

const resumeUrl =
  "https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/resume/amirhallaji.pdf";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="heroImageWrapper">
        <img src={amirHallaji} alt="Amir Hallaji" className="heroImage" />
      </div>
      <main className="heroMain">
        <p className="heroEyebrow">ML Engineer at Snapp</p>
        <h1>My name is Amir.</h1>
        <h2>
          I build production machine learning systems, and research drug–target
          interaction with protein and molecule language models.
        </h2>
        <div className="heroActions">
          <Button href={resumeUrl} target="_blank" rel="noreferrer">
            Download Resume
          </Button>
          <Button
            className="buttonGhost"
            onClick={() =>
              document
                .getElementsByClassName("publications")[0]
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Publications
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Hero;
