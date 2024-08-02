import React from "react";
import Reviews from "./Reviews";

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
