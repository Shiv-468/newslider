// NewSlider.jsx
import React from "react";
import Reviews from "./Reviews"; // Adjust the path if Reviews is in a different directory

export const CONTINUE_SLIDER = [
  { text: 'Social Tensor' },
  { text: 'INFINI' },
  { text: 'TourGame' },
  { text: 'Aperture' },
  { text: 'Niche Tensor' },
  { text: 'Aperture' },
  { text: 'Social Tensor' },
  { text: 'THELASTONE' },
  { text: 'INFINI' },
];

const NewSlider = () => {
  // Example keys for the Marquee component, they should be unique
  const key1 = "marquee1";
  const key2 = "marquee2";
  
  return (
    <div>
      <Reviews 
        items={CONTINUE_SLIDER} 
        key1={key1}
        key2={key2}
      />
    </div>
  );
};

export default NewSlider;
