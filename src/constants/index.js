import {
  mobile,
  backend,
  creator,
  webdev,
  mobiledev,
  architecture,
  odc,
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
  meta,
  starbucks,
  tesla,
  shopify,
  temus,
  carrent,
  jobit,
  tripguide,
  threejs,
  outsystems,
  python,
  expressjs,
  ripplegym,
  kopisiudai,
  projectbnb,
  firstportfolio,
  langchain,
  nextjs,
  spline,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Mobile Developer",
    icon: mobiledev,
  },
  {
    title: "Architecture Specialist",
    icon: architecture,
  },
  {
    title: "Outsystems Cloud",
    icon: odc,
  },
];

const technologies = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "spline",
    icon: spline,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "outsystems",
    icon: outsystems,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "langchain",
    icon: langchain,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Temus",
    icon: temus,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Development of commercial grade web and mobile applications using Outsystems and Javascript.",
      "Cross collaboration with other functional teams, to create an AI powered solution for internal use",
      "Engaging in backend development tasks including caching mechanisms and cart checkout functionalities."
    ],
  },
  
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ripple",
    description:
      "Reactive web gym application built with MERN stack. Features user authentication, data archival of weekly workouts and content management for a local product listing page.",
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
    image: ripplegym,
    source_code_link: "https://theripplegym.vercel.app/",
  },
  {
    name: "Kopi",
    description:
      "A project done as part of Outsystems Build for the Future Hackathon 2023. The application came in 3rd place for demos and ranked 13th overall out of 67 teams.",
    tags: [
      {
        name: "outsystems",
        color: "blue-text-gradient",
      },
      {
        name: "openAI API",
        color: "green-text-gradient",
      },
      {
        name: "hackathon",
        color: "pink-text-gradient",
      },
    ],
    image: kopisiudai,
    source_code_link: "https://www.youtube.com/watch?v=jSQqT_oC680&t=2s",
  },
  {
    name: "First Portfolio",
    description:
      "My very first website! Learnt HTML and CSS basics with this project with the help of Udemy courses and youtube videos (and of course stack overlow).",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: firstportfolio,
    source_code_link: "https://leeechuan.github.io/portfolio-old/",
  },
  {
    name: "Budget&Beyond",
    description:
      "Web application for families to keep track of their events, finances, shopping wish lists. Also features a back office, data archival and data isolation.",
    tags: [
      {
        name: "outsystems",
        color: "blue-text-gradient",
      },
    ],
    image: projectbnb,
    source_code_link: "https://docs.google.com/presentation/d/1Y-_3-nZGzg2PMqXmdrh0lcgbEA1ylEFA/edit?usp=sharing&ouid=104002942782337411474&rtpof=true&sd=true",
  },
];

export { services, technologies, experiences, testimonials, projects };
