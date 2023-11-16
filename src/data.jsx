import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const fullName = "Leonardo de Jesus";

export const contact = [
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    text: "Berlin, Germany",
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    text: "+49 176 34691191",
    href: "tel:4917634691191",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    text: "leonardofj@gmail.com",
    href: "mailto:leonardofj@gmail.com",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    text: "linkedin.com/in/leonardo-jesus",
    href: "http://linkedin.com/in/leonardo-jesus",
  },
];

export const description =
  "Highly motivated developer and engineer with almost 10 years of experience. Blends an engineering background with software development to bring innovative and creative solutions. Always willing to learn, share knowledge and create. Experience includes planning, designing and implementing solutions on backend, data structures and ETL pipelines. An enthusiastic team player with strong problem-solving and analytical skills.";

export const education = {
  title: "Bachelor in Mechanical Engineering, major in Mechatronics",
  institution: "Escola Politécnica da Universidade de São Paulo (USP)",
  date: 2009,
};

export const languages = [
  {
    language: "Portuguese",
    level: "Native",
  },
  {
    language: "English",
    level: "Fluent",
  },
  {
    language: "German",
    level: "Intermediate",
  },
  {
    language: "French",
    level: "Intermediate",
  },
];

export const skills = [
  ["Python", "Flask", "Django", "Shell Script", "gRPC", "FastAPI"],
  ["MongoDB", "PostgreSQL", "MySQL"],
  ["RabbitMQ", "Kafka", "Celery"],
  ["Docker", "Kubernetes", "DigitalOcean", "Azure"],
  ["Linux", "Git", "Trello", "Jira", "Scrum"],
  ["Data structures", "ETL pipelines", "microservices architecture"],
  ["Basic JavaScript", "TypeScript", "HTML and CSS"],
  [
    "Critical thinking",
    "problem solving",
    "creative thinking",
    "project scoping",
  ],
];

export const experience = [
  {
    title: "Software Engineer",
    date: "Jun 2018 - Present",
    company: "delphai",
    location: "Berlin, Germany",
    points: [
      "Designed, implemented and administrated MongoDB database for storing company data.",
      "Implemented Django interface to perform CRUD operations on the database, allowing the analysts to interact with the data.",
      "Handled ingestion and management of data from multiple sources.",
      "Participated on the migration of the system to microservices architecture, conceptualizing and implementing backend services, collaborating with frontend developers and devops.",
      "Collaborated with other team members on planing and building new features in accordance with clients requests.",
      "Improved automation of data ingestion by implementing ETL pipelines for scraping, processing and saving news articles and job posts.",
    ],
  },
  {
    title: "Freelance Developer and Translator",
    date: "Aug 2015 - May 2018",
    points: [
      "Implemented a freelance business, negotiating and dealing with different clients.",
      "Writing Python scripts to mine and parse different sets of unstructured data according to the clients' demands, designing databases and creating MySQL queries for different projects, formulating creative solutions to achieve their goals.",
      "Translating between English and Portuguese on a great variety of topics, checking and proofreading with extra attention to details.",
    ],
  },
  {
    title: "Software Developer",
    date: "Mar 2012 - Aug 2015",
    company: "Digesto Pesquisa e Banco de Dados",
    location: "São Paulo, Brazil",
    points: [
      "Coding in Java and Python to mine and parse public data from federal state courts of Brazil, designing and populating a database of juridical decisions and creating a search engine for natural language using Solr.",
      "Managing freelancers from different parts of the world to implement new features and new sources in the project.",
      "Monitoring error and performance reports and developing improvement strategies for these.",
      "Bespoke data acquisition and analysis of court case data for banks and large-scale companies.",
      "Developed two methods for reading captchas from public legal data, reducing the data mining time from the top courts in Brazil by over 24,000 hours.",
    ],
  },
];

export const others = [
  "Took part on a college project teaching programming to children from disadvantaged schools and aiding to provide a basis in electronics to high school students.",
  "Research intern on the development of a tetrapod robot for surgical applications.",
];
