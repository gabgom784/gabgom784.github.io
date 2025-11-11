import React from 'react';
import './home.css'; // We'll add some styles
import NavButton from './navButton';
import PhotoCarousel from './photoCarousel';

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
        <a href="#projects" className="home-btn">View My Projects</a>
      </header>
      <section className="home-intro">
        <p>
          Welcome to my portfolio! Here you'll find my projects, skills, and experiences.
          Take a look around and feel free to reach out via the contact section.
        </p>
      </section>
      <PhotoCarousel></PhotoCarousel>;
    </div>
  );
};

export default Home;