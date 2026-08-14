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
        ) : props.title === "publications" ? (
          data.publications.map((publication) => (
            <Card
              key={publication.title}
              logos={publication.logos}
              title={publication.title}
              body={publication.body}
              isList={publication.type === "ol"}
              link={publication.link}
              linkText={publication.linkText}
            />
          ))
        ) : props.title === "experiences" ? (
          <>
            {data.experiences.map((experience) => (
              <Card
                key={experience.title}
                logos={experience.logos}
                title={experience.title}
                body={experience.body}
                isList={experience.type === "ol"}
              />
            ))}
            <h4 className="sectionSubtitle">Volunteer work</h4>
            {data.volunteerWorks.map((work) => (
              <Card
                key={work.title}
                logos={work.logos}
                title={work.title}
                body={work.body}
                isList={work.type === "ol"}
              />
            ))}
          </>
        ) : props.title === "certifications" ? (
          data.certifications.map((certification) => (
            <Card
              key={certification.title}
              logos={certification.logos}
              title={certification.title}
              body={certification.body}
              isList={certification.type === "ol"}
              hasGallery={certification.hasGallery}
              hasEmblem={certification.hasEmblem}
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
            <p>
              I'm Amir Hallaji, an ML Engineer at Snapp and a Master's graduate
              in Artificial Intelligence from Shahid Beheshti University.
            </p>
            <p>
              I work on production machine learning systems in high-traffic
              environments, and I care about building software that scales —
              reliable services, clean architecture, and systems that hold up
              under load.
            </p>
            <p>
              I'm especially interested in large language models and deep
              learning: applying them in production, and researching
              bioinformatics and drug–target interaction prediction with protein
              and molecule language models.
            </p>
          </div>
        ) : (
          <div className="sectionMainBody">
            <p>
              I'd be glad to connect. Reach me through any of these:
            </p>
            <ul className="contactList">
              <li>
                <span>Email</span>
                <a href="mailto:me@amirhallaji.com">me@amirhallaji.com</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/amirhallaji/"
                  target="_blank"
                  rel="noreferrer"
                >
                  amirhallaji
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a
                  href="https://github.com/amirhallaji"
                  target="_blank"
                  rel="noreferrer"
                >
                  amirhallaji
                </a>
              </li>
            </ul>
          </div>
        )}
      </main>
    </section>
  );
};

export default Section;
