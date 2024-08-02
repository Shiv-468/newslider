// Reviews.jsx
import React, { useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";

const TextItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  padding: 0;
  margin: 0 12px; 
`;

const Reviews = ({ items, key1, key2 }) => {
  const [velocity1, setVelocity1] = useState(25);
  const [velocity2, setVelocity2] = useState(25);

  return (
    <div>
      <div
        onMouseEnter={() => setVelocity1(0)}
        onMouseLeave={() => setVelocity1(25)}
      >
        <Marquee key={key1} velocity={velocity1} direction="ltr" resetAfterTries={0}>
          {[...items, ...items].map((item, index) => (
            <TextItem key={`marquee-example-people-${index}`}>
              {item.text}
            </TextItem>
          ))}
        </Marquee>
      </div>
      <div/>
      <div
        onMouseEnter={() => setVelocity2(0)}
        onMouseLeave={() => setVelocity2(25)}
      >
        <Marquee key={key2} velocity={velocity2} direction="rtl" resetAfterTries={0}>
          {[...items, ...items].map((item, index) => (
            <TextItem key={`marquee-example-people-${index + items.length}`}>
              {item.text}
            </TextItem>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
