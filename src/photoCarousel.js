import React from "react";
import "./photoCarousel.css";

const photos = [
    "./pictures/gabe_pictures/photo_1.jpeg",
    "./pictures/gabe_pictures/photo_2.jpg",
    "./pictures/gabe_pictures/photo_3.jpeg",
    "./pictures/gabe_pictures/photo_4.jpeg",
    "./pictures/gabe_pictures/photo_5.jpeg"
];

function PhotoCarousel() {
    return (
    <div className="carousel-container">
      <div className="carousel-track">
        {photos.concat(photos).map((photo, index) => (
          <img key={index} src={photo} alt={`Gabriel ${index}`} className="carousel-photo" />
        ))}
      </div>
    </div>
  );
}

export default PhotoCarousel;