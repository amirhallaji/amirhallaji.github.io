import beheshti from "./assets/images/behehsti.png";
import snapp from "./assets/images/snapp.jpeg";
import aic from "./assets/images/aic.jpg"
import salam from "./assets/images/salam.jpeg";
import mavaratech from "./assets/images/mavaratech.png";
import tooba from "./assets/images/tooba.jpg";
import irancellLabs from "./assets/images/irancelllabs.jpg"
import irancelhackathon from "./assets/images/irancel-hackathon.jpg"
import olympics2024 from "./assets/images/nlp-olympics-2024.jpg";
import olympicsRanking from "./assets/images/olympics-ranking.png"
import aaicCertificate from "./assets/images/aaic_chatbot.jpg";
import aaicRankings from "./assets/images/aaic_ranking.jpg";
import ili from "./assets/images/ili.jpg"
import snackflix from "./assets/images/snackflix.png";
import idea from "./assets/images/idea.png";
import rankings from "./assets/images/rankings.png";
import beheshtray from "./assets/images/beheshtray.png";

export const educations = [
  {
    logos: [beheshti],
    title:
      "(2022 - Now), MSc in Artificial Intellignece at Shahid Beheshti University",
    body: "Most interested in Deep Learning, Machine Learning and NLP Under the supervision of Dr.Hamed Malek",
  },
  {
    logos: [beheshti],
    title:
      "(2018 - 2022), BSc in Computer Engineering at Shahid Beheshti University",
    body: "Gratuated as a computer engineer.\nGPA: 18.00 / 20.",
  },
];

export const experiences = [
  {
    logos: [snapp],
    title: "(2022 - Now), Software Engineer at Snapp Inc",
    body: `- Designing and implementation of microservices for Pricing team which includes:
    -> Adding features
    -> Fixing Bugs
    -> Enhancing performance
    - Deploying management with K8s
    - Implementing CI/CD in the GitLab pipeline for services
    - Monitoring services using Grafana Dashboards
    - Holding Knowledge Sharing sessions
    - etc`,
  },
  {
    logos: [aic],
    title: "(2022 - Now), Head Club Member at AIC (Artificial Intelligence Club at Shahid Behehsti University)",
    body: `Leading Shahid Beheshti AI Club
    - Attending Competitions
    - Holding sessions for article presentation
    - Writing posts about ML, AI articles, and technologies in a blog
    - Teaching AI, ML to students
    - Mentoring new members
    - etc`,
  },
  {
    logos: [salam],
    title: "(2019 - 2023), Introduction to programming Teacher at Salam Tajrish High school",
    body: "Teaching introduction to programming in C/C++, Java",
  },
  {
    logos: [mavaratech],
    title: "2020, Backend Developer Intern at Mavaratech",
    body: "Learned Backend Programming in Java.",
  },
  {
    logos: [tooba],
    title: "2019, Programmer Intern at Toobatech",
    body: "Learned HTML, CSS",
  },
];

export const certifications = [
  {
    logos: [irancellLabs, irancelhackathon],
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
    linkText: "",
    link: "",
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
