import React from "react";
import "./TechBar.css";

const widthMap = {
    beginner: "30%",
    intermediate: "55%", 
    advanced: "75%"
}; 

const TechBar = ({technology, experience_level, type, image}) => {
    const barWidth = widthMap[experience_level] || "50%";

    return(
        <div className="TechBarContainer" style={{width: barWidth}}>
            <h2>{technology}</h2>
            <img src={image}></img>
        </div>
    )
}

export default TechBar;