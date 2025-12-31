import React, { useState } from 'react';
import "./projectBar.css";


const ProjectBar = ({title, type, paragraph, image}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className = "ProjectBar-div">
                <div className="LeftHandSide">
                    <div className="TitleAndType">
                        <div className="ProjectTitleDiv"><h3>{title}</h3></div>
                        <div className="ProjectTypeDiv"><h4>{type}</h4></div>
                    </div>
                    <p>{paragraph}</p>
                </div>
                <div className="RightHandSide">
                    <img src={image} alt={title + " preview"} className="project-image" onClick={() => setIsOpen(true)}/>
                </div>
            </div>

            {isOpen && (
                    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                        <img
                            src={image}
                            alt={title + " enlarged"}
                            className="modal-image"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
            )}
        </>

    )
}

export default ProjectBar;