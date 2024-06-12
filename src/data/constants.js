import iiitbh_logo from '../assets/iiitbh_logo.png'
import portfolio from '../assets/portfolio.png';
import X_logo from '../assets/Xschool.jpg';
import XII_logo from '../assets/XIIschool.jpg';
import testimonial from '../assets/testimonial.jpg'
import ecommerce from '../assets/ecommerce.jpg'
export const Bio = {
  name: "Aman Verma",
  roles: [
    " Full-stack web Developer","Coder"
  ],
  description:
    "With unwavering faith in my abilities and a steadfast dedication to continuous growth and learning, I embark on every challenge with confidence and enthusiasm., I aim to elevate the web landscape with innovation and integrity.",
  github: "https://github.com/amanverma100",
  resume:
  "https://1drv.ms/b/c/44120d2a81c00002/Eeea6CaSss5NnY_Tzqr_GSYBEgUpFf2KONQT2EzsyNbEkg?e=C5Pk6M",
  linkedin: "https://www.linkedin.com/in/aman-verma-300948258/",
  twitter: "https://twitter.com/",
  insta: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/amanverma002",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TailwindCSS",
        image:
          "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
      },
    ],
  },
  {
    title: "Backend",
    skills: [ 
      {name:"Express.js",
       image:"https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"
      },
      {
        name:"Mongoose",
        image:"https://img.icons8.com/?size=100&id=gKfcEStXI1Hm&format=png&color=000000"
      },
      {
         name:"jwt ",
         image:"https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000"
      },
      {
        name:"Mongodb",
        image:"https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
      },
      {
        name:"postman",
        image:"https://img.icons8.com/?size=100&id=kVzqFZ8zS2MB&format=png&color=000000"
      }
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name:"DSA",
        image:""
      },
      {
        name:"problem-solving",
        image:"https://img.icons8.com/?size=100&id=rVSB3GaDDURu&format=png&color=000000"
      },
      {
        name:"C++",
        image:"https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
      },
      {
        name:'Mysql',
        image:"https://img.icons8.com/?size=100&id=11572&format=png&color=000000"
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
     
    ],
  },
];

export const education = [
  {
    id: 0,
    img: `${iiitbh_logo}`,
    school: "Indian Institute Of Information Technology Bhagalpur",
    date: "Dec 2021 - 2025",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science at Indian Institute Of Information Technology Bhagalpur.",
    degree: "Bachelor of Technology - BTech",
  },
  {
    id: 1,
    img: `${XII_logo}`,
    school: "Radiant Central Children Academy Jalalpur,Ambedkarnagar Uttarpradesh",
    date: "Apr 2018 - Apr 2020",
    grade: "94%",
    desc: "I completed my class 12th education at Radiant Central Children Academy Jalalpur where I studied maths with computer Science.",
    degree: "CBSE(XII), Maths with Computer science",
  },
  {
    id: 2,
    img:`${X_logo}`,
    school: "St. Xaviers's High school ",
    date: "Apr 2017 - Apr 2018",
    grade: "86%",
    desc: "I completed my class 10 education at St Xavier's High School",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 1,
    title: "Testimonial",
    date: " sept 2023 - sept 2023",
    description:
      "Here I made a testimonial website using react and TailwindCSS main aim of this project is to learn useState and useEffect hooks",
    image:
    `${testimonial}`,
    tags: [
      "React Js","Tailwindcss"
    ],
    category: "Front_end",
  },
  
  {
    id: 2,
    title: "Portfolio",
    date: "Oct 2022 - Present",
    description:
      " A portfolio website provides a centralized platform to display our projects, work samples, and achievements. It allows potential clients, employers, or collaborators to easily view and assess your capabilities. ",
    image:
    `${portfolio}`,
    tags: [
      "React Js",
      "styled-component",
      'javascript',
       "HTML"
    ],
    category: "Front_end",
  },
  {
    id: 3,
    title: "E-commerce website with Admin panal",
    date: " 10 may 2024 - 30 june 2024",
    description:
      "This project focuses on developing a comprehensive E-commerce website and Admin panal application using the MERN (MongoDB, Express.js, React.js, Node.js) Stack. The goal is to provide efficient management tools for an online store, allowing administrators to handle user authentication, category management, and product management seamlessly",
    image:`${ecommerce}`,
    tags: ["React.js", "Express.js", "TailwindCss", "MongoDb", "Mongoose", "Postman"],
    category: "Full_stack",
  },
  
];

