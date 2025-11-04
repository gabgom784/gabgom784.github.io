import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import About from "./About";
import NavButton from "./navButton";
import "./App.css"

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><NavButton to="/" name="home" /></li>
          <li><NavButton to="/projects" name="projects" /></li>
          <li><NavButton to="/about" name="about" /></li>
        </ul>
      </nav> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;