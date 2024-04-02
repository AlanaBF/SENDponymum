import { useState } from "react";
import gallery from "./gallery.json";

function PonyPerspectives() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };
    return (
      <div className="page-background">
      <br/>
      <h1>SENDponymum&apos;s eye: a snapshot of the delightful chaos we embrace!</h1>
      <br/>
 
      <div className="image-grid-container">
      <div className="image-grid">
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image.link}
            alt={`Image ${index + 1}`}
            className={selectedImage === image.link ? "selected" : ""}
            onClick={() => handleImageClick(image.link)}
          />
        ))}
      </div>
      </div>
 
 
      </div>
    );
  }
  
  export default PonyPerspectives;