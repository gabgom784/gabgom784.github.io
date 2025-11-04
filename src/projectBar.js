import React from 'react';
import "./projectBar.css";


const ProjectBar = ({title, paragraph, image}) => {
    return <div className = "ProjectBar-div">
        <div className="LeftHandSide">
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
        <div className="RightHandSide">
            <img src={image} alt={title + " preview"} className="project-image" />
        </div>
    </div>
}

export default ProjectBar;