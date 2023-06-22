import "../styles/Section.css";
import * as data from "../data";
import Card from "./Card";

const Section = (props) => {
  return (
    <section className={`section subSection ${props.title}`}>
      <h3 className="sectionTitle">{props.title}</h3>
      <main
        className={`sectionMain${
          props.title === "certifications" || props.title === "projects"
            ? " grid"
            : ""
        }`}
      >
        {props.title === "education" ? (
          data.educations.map((education) => (
            <Card
              key={education.title}
              logos={education.logos}
              title={education.title}
              body={education.body}
              isList={education.type === "ol"}
            />
          ))
        ) : props.title === "experiences" ? (
          data.experiences.map((experience) => (
            <Card
              key={experience.title}
              logos={experience.logos}
              title={experience.title}
              body={experience.body}
              isList={experience.type === "ol"}
            />
          ))
        ) : props.title === "certifications" ? (
          data.certifications.map((certification) => (
            <Card
              key={certification.title}
              logos={certification.logos}
              title={certification.title}
              body={certification.body}
              isList={certification.type === "ol"}
              link={certification.link}
              linkText={certification.linkText}
            />
          ))
        ) : props.title === "projects" ? (
          data.projects.map((project) => (
            <Card
              key={project.title}
              logos={project.logos}
              title={project.title}
              body={project.body}
              isList={project.type === "ol"}
              hasBanner
              link={project.link}
              linkText={project.linkText}
            />
          ))
        ) : props.title === "about" ? (
          <div className="sectionMainBody">
            Welcome to my website! I'm Amir Hallaji, a MSc student in Artificial Intelligence and a 
            Software Backend Engineer at Snapp Inc. I am passionate about AI and Software to create
            products to help people live better in this world.

          </div>
        ) : (
          <div className="sectionMainBody">
            Thank you for your interest! I would be delighted to connect and
            discuss how we can collaborate. Feel free to reach out to me using
            any of the following contact methods:
            <br />
            <br />
            Email:{" "}
            <a href="mailto:a.hallaji.b@gmail.com">
              a.hallaji.b@gmail.com
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/amirhallaji/"
              target="_blank"
            >
              https://www.linkedin.com/in/amirhallaji/
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/amirhallaji" target="_blank">
              https://github.com/amirhallaji
            </a>
          </div>
        )}
      </main>
    </section>
  );
};

export default Section;
