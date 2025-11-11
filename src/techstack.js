import { useState } from "react";
import TechBar from "./TechBar";
import "./techstack.css";

const technologies = [
  { technology: "HTML", experience_level: "beginner", type: "frontend"},
  { technology: "CSS", experience_level: "intermediate", type: "frontend"},
  { technology: "JavaScript", experience_level: "advanced", type: "frontend"},
  { technology: "PostGreSQL", experience_level: "intermediate", type:"database"},
  { technology: "Python", experience_level: "advanced", type:"backend"},
  { technology: "Tableu", experience_level: "beginner", type: "database"}
];

export default function TechStack() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const filteredTech = technologies.filter((tech) => {
    const matchesName = tech.technology.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || tech.type === selectedType;
    return matchesName && matchesType 
  });

  return (
    <div className="MainTechStackDiv">
      <h1>My Tech Stack</h1>
      
      {/* This is for the search bar */}
      <input
        type="text"
        className="TechSearchBar"
        placeholder="Search technologies..."
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

      {/* This is for the type filter */}
       <select className="TechTypeFilter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="all">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">Data Science</option>
      </select>

      {/* Legend */}
      <div className="TechLegend">
        <h3>Skill Level Legend</h3>
        <div className="LegendBars">
          <div className="LegendItem">
            <div className="LegendBar beginner"></div>
            <span>Beginner</span>
          </div>
          <div className="LegendItem">
            <div className="LegendBar intermediate"></div>
            <span>Intermediate</span>
          </div>
          <div className="LegendItem">
            <div className="LegendBar advanced"></div>
            <span>Advanced</span>
          </div>
        </div>
      </div>

      {filteredTech.map((tech, index) => (
        <TechBar key={index} technology={tech.technology} experience_level={tech.experience_level}/>
      ))}
    </div>
  );
}