import  { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import aam from "./aam.json";

function AutismAcceptanceMonth() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {aam.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="carousel-image"
            src={image.link}
            alt={`Image ${idx + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default AutismAcceptanceMonth;
