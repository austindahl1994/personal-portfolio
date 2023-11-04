import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects.jsx"
import About from "./pages/about/About"
import Resume from "./pages/resume/Resume"
import Contact from "./pages/contact/Contact"
import Navigationbar from "./Navigationbar"
import Weather from "./pages/live/weather/WeatherWrapper"
import Todo from "./pages/live/todo/TodoWrapper"

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100 bg-light">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/todo" element={<Todo />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
