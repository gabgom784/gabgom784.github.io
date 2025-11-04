import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import About from "./About";
import TechStack from "./techstack";
import NavButton from "./navButton";
import "./App.css"

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><NavButton to="/" name="home" /></li>
          <li><NavButton to="/projects" name="projects" /></li>
          <li><NavButton to="/techstack" name="tech stack" /></li>
          <li><NavButton to="/about" name="about" /></li>
        </ul>
      </nav> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/techstack" element={<TechStack/>} />
      </Routes>
    </>
  );
}

export default App;