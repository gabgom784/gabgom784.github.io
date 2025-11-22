import React from 'react';
import './home.css'; // We'll add some styles
import NavButton from './navButton';
import PhotoCarousel from './photoCarousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">

      {/* <nav className="navbar">
        <ul className="nav-links">
          <li><NavButton href="/" name="home" /></li>
          <li><NavButton href="/projects" name="projects" /></li>
          <li><NavButton href="/about" name="about" /></li>
        </ul>
      </nav> */}
      
      


      <header className="home-header">
        <h1>Hello, I'm Gabriel Gomes</h1>
        <p>Software Engineer | Data Enthusiast | Problem Solver</p>
        <p>I am currently a Masters in Computer Science student at UC Irvine. Through extensive coursework, projects, and internships, 
          I have developed a profound skillset in software engineering, data science, and machine learning. I love solving real-world problems and
          learning new technologies!
        </p>
        <p>If you want to learn more about the work I do and my experience, please check out my projects and tech stack.</p>
        <Link to="/projects" className="home-btn">View my Projects</Link>
      </header>
      <section className="home-intro">
      </section>
      <PhotoCarousel></PhotoCarousel>
    </div>
  );
};

export default Home;