import { useState } from "react";
import TechBar from "./TechBar";
import "./techstack.css";

const technologies = [
  { technology: "HTML", experience_level: "beginner" },
  { technology: "CSS", experience_level: "intermediate" },
  { technology: "JavaScript", experience_level: "advanced" },
];

export default function TechStack() {

  const [searchTerm, setSearchTerm] = useState("");
  const filteredTech = technologies.filter((tech) => tech.technology.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="MainTechStackDiv">
      <h1>My Tech Stack</h1>

      <input
        type="text"
        className="TechSearchBar"
        placeholder="Search technologies..."
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>



      {filteredTech.map((tech, index) => (
        <TechBar key={index} technology={tech.technology} experience_level={tech.experience_level}/>
      ))}
    </div>
  );
}