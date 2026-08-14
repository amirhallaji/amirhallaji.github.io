import beheshti from "./assets/images/behehsti.png";
import snapp from "./assets/images/snapp.jpeg";
import aic from "./assets/images/aic.jpg"
import salam from "./assets/images/salam.jpeg";
import mavaratech from "./assets/images/mavaratech.png";
import irancellLabs from "./assets/images/irancelllabs.jpg"
import irancelhackathon from "./assets/images/irancel-hackathon.jpg"
import olympics2024 from "./assets/images/nlp-olympics-2024.jpg";
import olympicsRanking from "./assets/images/olympics-ranking.png"
import aaicCertificate from "./assets/images/aaic_chatbot.jpg";
import aaicRankings from "./assets/images/aaic_ranking.jpg";
import ili from "./assets/images/ili.png"
import snackflix from "./assets/images/snackflix.png";
import idea from "./assets/images/idea.png";
import rankings from "./assets/images/rankings.png";
import beheshtray from "./assets/images/beheshtray.png";
import journal from "./assets/images/journal.svg";

export const educations = [
  {
    logos: [beheshti],
    title:
      "(2022 - 2025), MSc in Artificial Intelligence at Shahid Beheshti University",
    type: "ol",
    body: [
      "Thesis: Enhancing Molecular and Protein Language Models for Drug-Target Interaction Analysis",
      <>
        Under the supervision of{" "}
        <a
          href="https://scholar.google.com/citations?user=_IIio8oAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Dr. Hamed Malek
        </a>
      </>,
    ],
  },
  {
    logos: [beheshti],
    title:
      "(2018 - 2022), BSc in Computer Engineering at Shahid Beheshti University",
    type: "ol",
    body: [
      "Graduated as a computer engineer",
      "GPA: 18.00 / 20",
      "Thesis: Linkedin Data Analysis",
    ],
  },
];

export const publications = [
  {
    logos: [journal],
    title:
      "(2026), Structure-free drug–target affinity prediction using protein and molecule language models",
    type: "ol",
    body: [
      "Journal of Cheminformatics, Volume 18, Article 21 (Open Access)",
      <>
        Authors: Amir Hallaji Bidgoli,{" "}
        <a
          href="https://scholar.google.com/citations?user=xrTDvV4AAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Morteza Mahdavi
        </a>
        {" "}&{" "}
        <a
          href="https://scholar.google.com/citations?user=_IIio8oAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Hamed Malek
        </a>
      </>,
      "Proposed and implemented a novel deep learning approach using pretrained language models (ChemBERTa and ESM2) to predict drug-target affinity without relying on 3D structural data",
      "Introduced a customized Residual Inception neural network architecture to integrate protein and molecule sequence embeddings, achieving multi-scale feature extraction",
      "Achieved state-of-the-art performance on benchmark datasets (Davis, KIBA, BindingDB)",
    ],
    linkText: "Read the paper",
    link: "https://link.springer.com/article/10.1186/s13321-025-01146-6",
  },
];

export const experiences = [
  {
    logos: [snapp],
    title: "(2022 - Now), Software Engineer at Snapp Inc",
    type: "ol",
    body: [
      "Designed and implemented microservices for the Pricing team, including new features, bug fixes, and performance work",
      "Managed Kubernetes deployments",
      "Implemented CI/CD in the GitLab pipeline",
      "Monitored services with Grafana dashboards",
      "Held knowledge sharing sessions",
    ],
  },
  {
    logos: [mavaratech],
    title: "2020, Backend Developer Intern at Mavaratech",
    type: "ol",
    body: [
      "Backend programming in Java with PostgreSQL",
      "Designed Beheshtray, a voting system for teachers and professors at the university",
    ],
  },
];

export const volunteerWorks = [
  {
    logos: [aic],
    title: "(2022 - Now), Head Club Member at AIC (Artificial Intelligence Club at Shahid Beheshti University)",
    type: "ol",
    body: [
      "Leading Shahid Beheshti AI Club",
      "Attending competitions",
      "Holding sessions for article presentation",
      "Writing posts about ML, AI articles, and technologies",
      "Teaching AI and ML to students",
      "Mentoring new members",
    ],
  },
  {
    logos: [salam],
    title: "(2019 - 2023), Introduction to programming Teacher at Salam Tajrish High school",
    type: "ol",
    body: [
      "Teaching introduction to programming in C/C++ and Java",
    ],
  },
];

export const certifications = [
  {
    logos: [irancellLabs, irancelhackathon],
    hasGallery: true,
    linkText: ["See Certificate", "See Ranking"],
    link: ["https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/assets/images/irancelllabs.jpg", "https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/assets/images/irancel-hackathon.jpg"],
    title: "Irancell Labs Artificial Intelligence Hackathon (2023)",
    type: "ol",
    body: [
      "Ranked \"1st\" in the contest (\"Zeus\" Team)",
      "Among 700 contributers"
    ],
  },
  {
    logos: [olympics2024, olympicsRanking],
    hasGallery: true,
    linkText: ["See Certificate", "See Ranking"],
    link: ["https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/assets/images/nlp-olympics-2024.jpg", "https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/assets/images/olympics-ranking.png"],
    title: "Tech AI Olympics in NLP (2024)",
    type: "ol",
    body: [
      "Ranked \"4th\" in the contest (\"Zeus\" Team)",
      "Among 1500 contributers"
    ],
  },
  {
    logos: [aaicCertificate, aaicRankings],
    hasGallery: true,
    linkText: ["See Certificate", "See Ranking"],
    link: ["https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/assets/images/aaic_chatbot.jpg", "https://github.com/amirhallaji/amirhallaji.github.io/blob/master/src/assets/images/aaic_ranking.jpg"],
    title: "Financial Chatbot (2024)",
    type: "ol",
    body: [
      "Ranked \"4th\" in the contest (\"Zeus\" Team)",
      "Held By AmirKabir University of Technology",
    ],
  },
  {
    logos: [ili],
    hasEmblem: true,
    linkText: "Visit ili.ir",
    link: "https://www.ili.ir",
    title: "Iran Language Institute",
    type: "ol",
    body: [
      "Studied English from the begining to Advanced Levels",
    ],
  },
];

export const projects = [
  {
    logos: [snackflix],
    linkText: "Click to see the Project",
    link: "https://github.com/AJob-Recommender/",
    title: "Linkedin Job Recommender",
    body: "AJR (Amir Job Recommender) is my bachelor thesis which recommends you a job based on your Skills, Education and Experiences.",
  },
  {
    logos: [idea],
    linkText: "Click to see the Project",
    link: "https://github.com/Idea-Thrive/",
    title: "Idea Thrive",
    body: "Idea Thrive is a website for managing ideas. In companies, there is a need for a system which manages ideas, gather and sort them for the personnels of that organization.",
  },
  {
    logos: [rankings],
    linkText: "Click to see the Project",
    link: "https://github.com/amirhallaji/Computational-Intelligence",
    title: "Topic News Classification",
    body: "Topic News classification classifies the Iranina content news to 5 categories. It was the Computational Intelligence final project.",
  },
  {
    logos: [beheshtray],
    linkText: "Click to see the Project",
    link: "https://github.com/amirhallaji/Beheshtray-Polling-System",
    title: "Beheshtray Polling system",
    body: "Beheshtray is a polling application in which you can submit comments about teachers, upvote and downvote them.",
  },
];
