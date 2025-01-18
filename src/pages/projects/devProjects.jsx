import portfolio from "../../assets/portfolioImage.jpg";
import lifeSupport from "../../assets/LifeSupport.jpg";
import todoApp from "../../assets/todoApp.jpg";
import weather from "../../assets/weather.jpg";
import resilience from "../../assets/resilience.jpg";
import carnival from "../../assets/CarnivalShootout.jpg"
import hell from "../../assets/EscapeFromHell.jpg"
import bot from "../../assets/DiscordBot.jpg"
import progress from "../../assets/Progress.jpg"

const projects = [
  {
    id: 0,
    name: "Life Support",
    image: lifeSupport,
    badges: ["Unity", "C#", "Object Oriented Programming"],
    info: "Side scrolling mystery-horror videogame created for the 2023 2D Horror game jam using the Unity Game Engine.",
    liveLink: "https://itzdubz.itch.io/life-support",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/life-support",
  },
  {
    id: 1,
    name: "Personal Portfolio",
    image: portfolio,
    badges: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
    info: "Personal Portfolio I created to show more about myself and my work. Uses React BrowserRouter for history based navigation and custom CSS with Bootstrap.",
    liveLink: "/",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/personal-portfolio",
  },
  {
    id: 2,
    name: "Todo App",
    image: todoApp,
    badges: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
    info: "Front end task list application with auto sorting and highlighting completed tasks, options to modify or delete tasks.",
    liveLink: "/todo",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/todo-app",
  },
  {
    id: 3,
    name: "Weather App",
    image: weather,
    badges: ["React", "Bootstrap", "JavaScript", "HTML", "CSS", "RESTful API"],
    info: "A weather web application using RESTful API requests from openweathermap.",
    liveLink: "/weather",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/Weather-React-App",
  },
  {
    id: 4,
    name: "Resilience App",
    image: resilience,
    badges: ["React Native", "JavaScript", "HTML", "CSS", "Expo"],
    info: "Front end mobile application created during internship at Resilience Inc.",
    liveLink: "",
    hasDescription: true,
    gitHubLink: "",
  },
  {
    id: 5,
    name: "Escape from Hell",
    image: hell,
    badges: ["Unity", "C#", "OOP"],
    info: "A 2D platformer videogame created for the 2024 Low Rez Jam using the Unity Game Engine.",
    liveLink: "https://marrex.itch.io/escape-from-hell",
    hasDescription: false,
    gitHubLink: "https://github.com/austindahl1994/Lowrezjam-2024",
  },  
  {
    id: 6,
    name: "Discord Bot",
    image: bot,
    badges: ["JavaScript", "DiscordJS", "NodeJS", "ExpressJS", "AWS"],
    info: "A discord bot created to evaluate prices in a videogame stock market.",
    liveLink: "",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/Bot-Project",
  },
  {
    id: 7,
    name: "Carnvial Shootout",
    image: carnival,
    badges: ["Unity", "C#", "OOP"],
    info: "A videogame created for the Fall 2024 2D Game Jam using the Unity Game Engine.",
    liveLink: "https://itzdubz.itch.io/carnival-shootout",
    hasDescription: false,
    gitHubLink: "https://github.com/austindahl1994/2D-Game-Jam",
  },
  {
    id: 8,
    name: "Current Project: Dashboard App",
    image: progress,
    badges: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "ExpressJS",
      "RESTful API",
      "JWT",
      "MySQL",
    ],
    info: "A full stack dashboard application utilizing React, HTML, and Bootstrap with custom CSS for the frontend. ExpressJs with MySQL Database for the backend. Utilizes JWT, httpOnly cookies, and password hashing for secure user authentication. Created to help spouse with daily tasks, using widgets (Character generation, expense tracking, flashcards, etc.) in a single web application.",
    liveLink: "https://github.com/austindahl1994/Dashboard-Frontend",
    hasDescription: false,
    gitHubLink: "https://github.com/austindahl1994/Dashboard-Backend",
  },
];

export default projects;
