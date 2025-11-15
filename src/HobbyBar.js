import React from "react";
import "./HobbyBar.css";

const HobbyBar = ({hobby, image}) => {
    return (
        <div className="MainHobbyDiv">
            <img src={image} alt={`${hobby} icon`} className="HobbyPicture" />
            <div className="HobbyDiv">
                <h3>{hobby}</h3>
            </div>
        </div>
    )
}

export default HobbyBar; 