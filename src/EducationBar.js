import React from "react";
import "./EducationBar.css";

const EducationBar = ({school, dates, major, minor, image, fit}) => {
    return (
        <div className="MainEducationDiv">
            <div className="EducationInfoDiv">
                <h2>{school}</h2>
                <div className="DatesAndMajor">
                    {major && <h3>Major: {major}</h3>}  {/*This means to only show the major if it exists */}
                    {minor && <h3>Minor: {minor}</h3>}  {/*This means to only show the minor if it exists */}
                    <h4>{dates}</h4>
                </div>
            </div>
            <img src={image} alt={`${school} icon`} className="EducationPicture" style={{objectFit:{fit}}}/>
        </div>
    )
}

export default EducationBar; 