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

    if (direction === "left") {
      nextIndex = currentIndex + 1;
    } else if (direction === "right") {
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
          <div className="card">
            <h2>Idk Icon</h2>
            <h3>
              Our physical security product has been a game-changer for our
              organization. Highly recommended!
            </h3>
            <div className="person">
              <FaUser />
              <div className="person_info">
                <p>
                  <strong>John Doe</strong>
                </p>
                <p>CEO, Company</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Idk Icon</h2>
            <h3>
              Our physical security product has been a game-changer for our
              organization. Highly recommended!
            </h3>
            <div className="person">
              <FaUser />
              <div className="person_info">
                <p>
                  <strong>John Doe</strong>
                </p>
                <p>CEO, Company</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Idk Icon</h2>
            <h3>
              Our physical security product has been a game-changer for our
              organization. Highly recommended!
            </h3>
            <div className="person">
              <FaUser />
              <div className="person_info">
                <p>
                  <strong>John Doe</strong>
                </p>
                <p>CEO, Company</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Idk Icon</h2>
            <h3>
              Our physical security product has been a game-changer for our
              organization. Highly recommended!
            </h3>
            <div className="person">
              <FaUser />
              <div className="person_info">
                <p>
                  <strong>John Doe</strong>
                </p>
                <p>CEO, Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
