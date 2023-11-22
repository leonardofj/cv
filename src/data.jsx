import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const fullName = "Leonardo de Jesus";

export const contact = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    text: "leonardofj@gmail.com",
    href: "mailto:leonardofj@gmail.com",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    text: "Berlin, Germany",
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
  ["Python", "Flask", "Django", "gRPC", "FastAPI"],
  ["MongoDB", "PostgreSQL"],
  ["RabbitMQ", "Kafka", "Celery"],
  ["Docker", "DigitalOcean", "Azure"],
  ["Linux", "Git", "Trello", "Jira", "Scrum"],
  ["Data structures", "ETL pipelines", "Microservices"],
  ["JavaScript", "TypeScript", "HTML and CSS"],
  [
    "Critical thinking",
    "Problem solving",
    "Creative thinking",
    "Project scoping",
  ],
];

export const experience = [
  {
    title: "Software Engineer",
    date: "Jun 2018 - Present",
    company: "delphai",
    location: "Berlin, Germany",
    points: [
      "Designed and administered MongoDB database for efficient storage of company data.",
      "Developed a Django interface enabling CRUD operations on the database, enhancing analysts' ability to interact with the data.",
      "Handled ingestion and management of data from multiple sources and improved automation by implementing ETL pipelines for scraping, processing and saving data",
      "Contributed to the migration to a microservices architecture, conceptualizing and implementing backend services using gRPC.",
      "Collaborated on feature development, ensuring alignment with client requirements.",
      "Engineered a robust RESTful public API using modern technologies such as FastAPI for enhanced functionality and performance.",
      "Established a robust testing framework for the backend by implementing automated tests and adhering to TDD methodologies, ensuring the reliability and stability of the system.",
    ],
  },
  {
    title: "Freelance Developer and Translator",
    date: "Aug 2015 - May 2018",
    points: [
      "Established and operated a freelance business, negotiating and collaborating with diverse clients.",
      "Developed Python scripts to extract and analyze diverse sets of unstructured data based on clients' requirements.",
      "Architected databases and engineered MySQL queries for diverse projects.",
      "Provided translation services between English and Portuguese across a diverse array of topics, meticulously proofreading with heightened attention to detail",
    ],
  },
  {
    title: "Software Developer",
    date: "Mar 2012 - Aug 2015",
    company: "Digesto Pesquisa e Banco de Dados",
    location: "São Paulo, Brazil",
    points: [
      "Implemented processes for the extraction and parsing of public data from Brazilian federal state courts, overseeing the design and population of a database containing juridical decisions.",
      "Managed a global team of freelancers, coordinating the implementation of new features and additional data sources into the project.",
      "Monitored error and performance reports, implementing improvement strategies.",
      "Customized data acquisition and analysis of court case information tailored for clients such as banks and large-scale enterprises.",
      "Implemented two captcha reading methods for extracting information from public legal data, resulting in a reduction in data mining time from Brazil's top courts by over 24,000 hours.",
    ],
  },
];

export const others = [
  "Participated in a college project, teaching programming to children from disadvantaged schools and assisting in establishing a foundational understanding of electronics for high school students.",
  "Contributed to the development of a tetrapod robot for surgical applications as a research intern.",
];
