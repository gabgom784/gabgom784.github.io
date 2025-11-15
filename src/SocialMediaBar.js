import React from "react";
import "./SocialMediaBar.css";

const SocialMediaBar = ({ platform, value, image }) => {
  const isList = Array.isArray(value); //This is just for the emails

  const content = (
    <div className="SocialMediaBar">
      <img src={image} alt={`${platform} icon`} className="SocialMediaIcon" />
      <div className="SocialMediaContent">
        <h3>{platform}</h3>
        {isList ? (
          <ul>
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : ""
        }
      </div>
    </div>
  );

  // If it's a link, wrap the entire bar in an <a> tag
  return isList ? content : (
    <a href={value} target="_blank" rel="noopener noreferrer" className="SocialMediaBarLink"> {content} </a>
  );
};

export default SocialMediaBar;
