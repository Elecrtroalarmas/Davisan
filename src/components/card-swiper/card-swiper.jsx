// src/components/CardSwipe.js
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./card-swiper.css";

export const CardSwipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 4; // Update this based on the total number of cards

  const handleSwipe = (direction) => {
    let nextIndex;
    
    if (direction === 'left') {
      nextIndex = currentIndex + 1;
    } else if (direction === 'right') {
      nextIndex = currentIndex - 1;
    }

    if (nextIndex >= 0 && nextIndex < totalCards) {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <>
      <button className="n1" onClick={() => handleSwipe("right")}>
        <FaArrowLeftLong />
      </button>
      <button className="n2" onClick={() => handleSwipe("left")}>
        <FaArrowLeftLong />
      </button>
      <div className="card-swiper">
        <div
          className="cards"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {/* Add your card components here */}
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
        </div>
      </div>
    </>
  );
};
