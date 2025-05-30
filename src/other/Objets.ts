import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import supabase from "../assets/supabase.png";
import favicon from "../assets/favicon.png";
import canva from "../assets/canva.png";
import figma from "../assets/figma.png";
import uni from "../assets/uni.png"
import cole from "../assets/cole.png"

export const WebSkill = [
  {
    name: "Html",
    level: "Intermediate",
    imagen: html,
  },
  {
    name: "Css",
    level: "Intermediate",
    imagen: css,
  },
  {
    name: "JavaScript",
    level: "Beginner ,I´m Learning",
    imagen: js,
  },
  {
    name: "React",
    level: "I´m Learning",
    imagen: react,
  },
  {
    name: "Ionic",
    level: "I´m Learning",
    imagen: favicon,
  },
  {
    name: "Node Js",
    level: "I´m Learning",
    imagen: node,
  },
  {
    name: "Git",
    level: "Beginner ,I´m Learning",
    imagen: git,
  },
  {
    name: "GitHub",
    level: "Beginner ,I´m Learning",
    imagen: github,
  },
  {
    name: "Bootstrap",
    level: "Beginner",
    imagen: bootstrap,
  },
  {
    name: "SupaBase",
    level: "I´m Learning",
    imagen: supabase,
  },
];

export const designSkill = [
  {
    name: "Figma",
    level: "Beginner, I´m Learning",
    imagen: figma,
  },
  {
    name: "Canva",
    level: "Intermediate",
    imagen: canva,
  }
]

export const eduaction = [
  {
    name: 'Educational Unit Dr. Jose Viliulfo Cedeño Sanchez',
    nevel: "Primary Education",
    date: "May 2010 - January 2016",
    degreeObtaied: "Primary Education",
  }, {
    name: 'Educational Unit 13 de Octubre',
    nevel: "High School",
    date: "May 2016 - January 2022",
    degreeObtaied: "Bachelor of Science",
    imagen: cole
  },
  {
    name: 'Polytechnic School of Agriculture of Manabi Manuel Felix López',
    nevel: "University",
    date: "Octuber 2022 - Present",
    degreeObtaied: "To Obtain",
    imagen: uni
  }
]

export const Language = [
  {
    name: "Spanish",
    level: "Native",
  },
  {
    name: "English",
    level: "Beginner, I´m Learning",
  }
]


export const proyects = [
  {
    image: "j",
    name: "My First Portfolio",
    description: "My First Web and also my First web Personal",
    tecnologies: [
       html,
        css,
         js,
    ],
    backend: "None",
    hosting: "Netfily",
    url: "https://salomeloor.netlify.app/home"
  },
  {
    image: "j",
    name: "Film Blog",
    description: "Here you can find important information about your favorite movies and the ones that are trending.",
    tecnologies:[
      html, 
      css, 
      js, 
      favicon
    ],
    backend:"Api TMDB",
    hosting:"Netlily",
    url:"https://filmblogapp.netlify.app/home"
  }
]