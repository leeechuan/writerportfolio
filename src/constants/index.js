import {
  argusmedia,
  tateanzur
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
  // {
  //   title: "Web Developer",
  //   icon: webdev,
  // },
  // {
  //   title: "Mobile Developer",
  //   icon: mobiledev,
  // },
  // {
  //   title: "Architecture Specialist",
  //   icon: architecture,
  // },
  // {
  //   title: "Outsystems Cloud",
  //   icon: odc,
  // },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "spline",
  //   icon: spline,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "outsystems",
  //   icon: outsystems,
  // },
  // {
  //   name: "python",
  //   icon: python,
  // },
  // {
  //   name: "expressjs",
  //   icon: expressjs,
  // },
  // {
  //   name: "langchain",
  //   icon: langchain,
  // },
];

const experiences = [
  {
    title: "Assistant Associate",
    company_name: "Tate Anzur",
    icon: tateanzur,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Apr 2022",
    points: [
      "Managing PR-related projects and the handling of corporate accounts for c-suite level executives",
      "Media Monitoring (Telum, Meltwater)",
      "Creation of communication plans and project outlines for clients Generated creative copy for various purposes",
      "Crafting of pitches and press releases"
    ],
  },
  
  {
    title: "Market Reporter",
    company_name: "Argus Media",
    icon: argusmedia,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "2 months on the Singapore News Desk, editing and publishing copies, writing stories on the energy and commodity market. ",
      "4 months on the Fertilizers Desk, reporting on the Ammonium Sulphate (Amsul) and Urea markets in Asia.",
      "Market Reporter in Fertilizers - Covering the Ammonia and Nitrogen (Urea and Ammonium Sulphate) Markets in Asia",
    ],
  },
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
    image: argusmedia,
    source_code_link: "https://theripplegym.vercel.app/",
  },
];


const reads = [
  {
    name: "A Certain Hunger",
    author: "Chelsea G. Summers",
    readtime: "7h 44mins",
    genre: "myster murder, fictional memoir, satire",
    description:
      "This book was equal parts grotesque and captivating. I really enjoyed it, read like a feminist version of american psycho coupled with critiques on foodism. i loved all the gritty details the author lavished onto us, and how she gave us privy into the dark mind of a psychopath and murderer. definitely told from the perspective of an unreliable narrator, which complicates but also adds dimension and dynamism to the body of work. completely unhinged & i resonate completely with it.",
    rating:
      "4",
    backgroundurl: "https://m.media-amazon.com/images/I/81AtUZ9-MQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Welcome To The Hyunam-Dong Bookshop",
    author: "Hwang Bo-reum",
    readtime: "4h 38mins",
    genre: "slice of life, fictional, think tank",
    description:
      "This was a translated novel from a korean writer. loved the vibes, very calming, explored a few characters who either burnt out from work or life and decided to explore an unconventional way of life after quitting their normal corporate hustle. language was of course a little scratchy considering it was a translated piece; but there were many memorable quotes about how living truly to yourself is a good day spent, and one should be proud of that. the book felt like a comfy little hideout to escape into whenever you opened it, a cosy warm bookstore, sitting by the fireplace, whatever you imagine it. worth reading, really enjoyed the whole experience",
    rating:
      "4",
    backgroundurl: "https://m.media-amazon.com/images/I/81h0d9oZqiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Mad Honey",
    author: "Jodi Picoult",
    readtime: "4h 1min",
    genre: "suicide, teransgender, domestic abuse",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    rating:
      "3.5",
    backgroundurl: "https://m.media-amazon.com/images/I/A1ymg0b1mLL._AC_UF1000,1000_QL80_.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects, reads };
