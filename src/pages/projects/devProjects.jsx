import portfolio from '../../assets/portfolioImage.jpg'
import lifeSupport from '../../assets/LifeSupport.jpg'
import todoApp from '../../assets/todoApp.jpg'
import weather from '../../assets/weather.jpg'

const projects = [
  {
    id: 0,
    name: 'Weather App', 
    image: weather, 
    badges: ['React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'RESTful API'], 
    info: 'A weather app using React for client side, Bootstrap for positioning, and custom CSS styling to improve appearances, with asynchronous API calls from openweathermap.org', 
    liveLink: '/live/weather', 
    gitHubLink: 'https://github.com/austindahl1994/Weather-React-App'
  },
  {
    id: 1,
    name: 'Todo App', 
    image: todoApp, 
    badges: ['React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'], 
    info: 'A todo app using React for client side, Bootstrap for positioning, and custom CSS styling to improve appearances', 
    liveLink: '/live/todo', 
    gitHubLink: 'https://github.com/austindahl1994/todo-app'
  },
  {
    id: 2,
    name: 'Personal Portfolio', 
    image: portfolio, 
    badges: ['React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'], 
    info: 'My portfolio made using bootstrap for the grid based rows and columns, React for the front end, along with custom CSS styling to improve visual performance.', 
    liveLink: '', 
    gitHubLink: 'https://github.com/austindahl1994/personal-portfolio'
  },
  {
    id: 3,
    name: 'Life Support', 
    image: lifeSupport, 
    badges: ['Unity', 'C#', 'Object Oriented Programming'], 
    info: 'A 2D game created using the Unity engine for a week long game jam. I was the sole programmer on a team with an artist and musician.', 
    liveLink: 'https://itzdubz.itch.io/life-support', 
    gitHubLink: 'https://github.com/austindahl1994/life-support'
  }
]

export default projects