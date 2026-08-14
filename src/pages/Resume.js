import Button from "../components/Button";
import { resumeDownloadName, resumePdfUrl } from "../lib/resume";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <main className="resumePage section">
      <header className="resumePageHeader">
        <p className="heroEyebrow">CV</p>
        <h1>Resume</h1>
        <div className="resumeActions">
          <Button href={resumePdfUrl} download={resumeDownloadName}>
            Download PDF
          </Button>
          <Button
            className="buttonGhost"
            href={resumePdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </Button>
        </div>
      </header>
      <div className="resumeFrameWrap">
        <iframe
          className="resumeFrame"
          title="Amir Hallaji resume"
          src={resumePdfUrl}
        />
      </div>
    </main>
  );
};

export default Resume;
