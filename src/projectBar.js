import React from 'react';
import "./projectBar.css";


const ProjectBar = ({title, type, paragraph, image}) => {
    return <div className = "ProjectBar-div">
        <div className="LeftHandSide">
            <div className="TitleAndType">
                <div className="ProjectTitleDiv"><h3>{title}</h3></div>
                <div className="ProjectTypeDiv"><h4>{type}</h4></div>
            </div>
            <p>{paragraph}</p>
        </div>
        <div className="RightHandSide">
            <img src={image} alt={title + " preview"} className="project-image" />
        </div>
    </div>
}

export default ProjectBar;