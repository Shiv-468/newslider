// Reviews.jsx
import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";

const TextItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin-left:12px;
  margin-right:12px;
`;

const Reviews = ({ items, key1, key2 }) => (
  <div>
     <Marquee key={key1} velocity={25} direction="ltr" resetAfterTries={0}>
        {[...items, ...items].map((item, index) => (
          <TextItem key={`marquee-example-people-${index}`}>
            {item.text}
          </TextItem>
        ))}
      </Marquee>
    
      <Marquee key={key2} velocity={25} resetAfterTries={0}>
        {[...items, ...items].map((item, index) => (
          <TextItem key={`marquee-example-people-${index + items.length}`}>
            {item.text}
          </TextItem>
        ))}
      </Marquee>
  </div>
);

export default Reviews;
