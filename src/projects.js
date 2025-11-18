import { useState } from "react";
import ProjectBar from "./projectBar";
import "./projects.css";

const projects = [
    {title:"My Own Personal Website", type:"Software Engineering", paragraph: `This is a personal website that I built in order for others to learn more about me! I used React to create
      the website as it allowed me to create interactive and reusable components, which I further styled myself using advanced CSS techniques. Please look around to get to know more about me!`, image:"./pictures/project_pictures/personal_website.png"},
    {title:"Crocodile Predictions", type:"Machine Learning", paragraph:"This is a machine learning project about crocodiles", image:"/pictures/Crocodilia_montage.jpg"},
    {title:"Youtube Analytics Dashboard", type:"Data Science", paragraph:"This is a project that I started in which one can input a youtuber of their interest and see the statistics about them. Utilizes the Youtuber API in order to gather the insights needed. Latest video statistics, subscriber count, and a description of the youtuber are just some of the features that are provided.", image:"/pictures/dog_trial.jpg"},
    {title:"News Article Notetaker", type:"Software Engineering", paragraph:`This is an articles news taker. Allows you to store news articles
              and type notes for them as well in a specific tab. It also has a built-in summarize feature, as well as ways to group your articles
              into separate groups such as politics, sports, etc, for which you can search by. The articles, and the notes for them, are stored on a local PostGreSQL database`, image:"/pictures/dog_trial.jpg"}
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredProj = projects.filter((project) => {
    const matchesName = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || project.type.toLowerCase().replace(/\s+/g, "") === selectedType.toLowerCase().replace(/\s+/g, "");
    return matchesName && matchesType 
  });

  return (
    <><div className="mainProjectsDiv">
          <h1>Projects Page</h1>
          <div>
              {/* This is for the search bar */}
                <input
                    type="text"
                    className="ProjectSearchBar"
                    placeholder="Search Projects..."
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

                {/* This is for the type filter */}
                <select className="ProjectTypeFilter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="softwareEngineering">Software Engineering</option>
                        <option value="machineLearning">Machine Learning</option>
                        <option value="dataScience">Data Science / Data Analytics</option>
                </select>
              
              {filteredProj.map((project, index) => (
                    <ProjectBar key={index} title={project.title} type={project.type} paragraph={project.paragraph} image={project.image}/>
              ))}
          </div>
    </div></>
  );
}


