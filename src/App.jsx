import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import About from "./pages/about/About"
import Resume from "./pages/resume/Resume"
import Contact from "./pages/contact/Contact"
import Navigationbar from "./Navigationbar"

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
        </Routes>
      </div>
    </>
  )
}

export default App
