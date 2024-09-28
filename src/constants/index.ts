import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Project Intern",
    companyName: "IIT PATNA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - July 2024 ",
    points: [
      "Led a team to develop a React-based web dashboard for Shoghi Tunnel and Chenab Bridge, utilizing React libraries to create multiple graph displays for sensor data and health metrics, reducing data monitoring time by 50%.",
"Engineered a predictive ML model for sensor data, achieving a 30% boost in disaster forecasting accuracy, thereby improving worker safety measures for 200+ employees and showcasing advanced problem-solving skills.", 
    ],
  },
  {
    title: "Software Enginnering Intern",
    companyName: "IIT BHU , Varanasi",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Led a team to engineer a React Native Android app, focusing on intuitive UI/UX, enhancing user engagement by 25%, and showcasing leadership and teamwork.", 
"Created and implemented a Siamese neural network-based ML model for cattle tracking, improving identification accuracy by 40%, and demonstrating problem-solving and innovative thinking.",
      ],
  },
  
];

const testimonials: TTestimonial[] = [  
{
    testimonial:
      "I am his team member and co-founder . He has shown excellent web designing skills and product design in multiple hackthons",
    name: "Harsh",
    designation: "Teammate",
    company: "Team Infamous",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
];

const projects: TProject[] = [
  {
    name: "Ecostrategix.ai",
    description:
      "Web-based platform that allows users to track climate change, carbon footprint calculator and predict climate change . Further Llama 3.1 is integrated to provide adaptive strategies for climate change ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Karnataka State Police Management Software",
    description:
      "Web application that enables policec officers to address traffic congestion control and resolution through a central dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Emossaheli AI",
    description:
      "A generative ai based mental health support agent built at IIIT Delhi on HOPE Dataset which help counsel people through semantic and descriptive answers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
