import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <button onClick={prevImage}>Previous</button>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
