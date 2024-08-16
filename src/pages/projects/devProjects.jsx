import portfolio from "../../assets/portfolioImage.jpg";
import lifeSupport from "../../assets/LifeSupport.jpg";
import todoApp from "../../assets/todoApp.jpg";
import weather from "../../assets/weather.jpg";
import resilience from "../../assets/resilience.jpg";

const projects = [
  {
    id: 5,
    name: "FarmJam 2024",
    image: "",
    badges: ["Unity", "C#", "OOP"],
    info: "A videogame created for the 2024 FarmJam using the Unity Engine.",
    liveLink: "",
    hasDescription: false,
    gitHubLink: "",
  },
  {
    id: 7,
    name: "Discord Bot",
    image: "",
    badges: ["JavaScript", "DiscordJS", "NodeJS", "ExpressJS", "AWS"],
    info: "A discord bot created to evaluate prices in a videogame stock market.",
    liveLink: "",
    hasDescription: true,
    gitHubLink: "",
  },
  {
    id: 6,
    name: "Favorites App",
    image: "",
    badges: [
      "React",
      "CI/CD",
      "JavaScript",
      "Jest",
      "MongoDB",
      "NodeJS",
      "ExpressJS",
    ],
    info: "Full Stack application made to learn industry standard tools and coding practices.",
    liveLink: "",
    hasDescription: true,
    gitHubLink: "",
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
    id: 2,
    name: "Todo App",
    image: todoApp,
    badges: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
    info: "Front end task list application.",
    liveLink: "/todo",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/todo-app",
  },
  {
    id: 1,
    name: "Personal Portfolio",
    image: portfolio,
    badges: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
    info: "Personal Portfolio I created to show more about myself and my work.",
    liveLink: "",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/personal-portfolio",
  },
  {
    id: 0,
    name: "Life Support",
    image: lifeSupport,
    badges: ["Unity", "C#", "Object Oriented Programming"],
    info: "2D side scrolling mystery-horror videogame created in a week for a jam using the Unity engine.",
    liveLink: "https://itzdubz.itch.io/life-support",
    hasDescription: true,
    gitHubLink: "https://github.com/austindahl1994/life-support",
  },
];

export default projects;
