// src/components/CardSwipe.js
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./card-swiper.css";

export const CardSwipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 8; // Update this based on the total number of cards

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
          style={{
            transform: `translateX(-${currentIndex * (100 / totalCards)}%)`,
          }}
        >
          <div className="card">
            <h2>Idk Icon</h2>
            <h3>
              Our physical security product has been a game-changer for our
              organization. Highly recommended!
            </h3>
            <div className="person">
              <picture>
                <source srcSet="/clientes/cc_sogamoso.png" />
                <img src="/clientes/cc_sogamoso.png" alt="person" />
              </picture>
              <div className="person_info"></div>
            </div>
          </div>
          <div className="card">
            <h2>Idk Icon</h2>
            <h3>
              Our physical security product has been a game-changer for our
              organization. Highly recommended!
            </h3>
            <div className="person">
              <picture>
                <source srcSet="/clientes/terminal_sogamoso.jpg" />
                <img src="/clientes/terminal_sogamoso.jpg" alt="person" />
              </picture>
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
              <picture id="santoto">
                <source srcSet="/clientes/santoto.png" />
                <img src="/clientes/santoto.png" alt="person" />
              </picture>
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
              <picture id="santoto">
                <source srcSet="/clientes/famedic.jpg" />
                <img src="/clientes/famedic.jpg" alt="person" />
              </picture>
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
              <picture id="santoto">
                <source srcSet="/clientes/egeiro.png" />
                <img src="/clientes/egeiro.png" alt="person" />
              </picture>
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
              <picture id="santoto">
                <source srcSet="/clientes/coomproriente.png" />
                <img src="/clientes/coomproriente.png" alt="person" />
              </picture>
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
              <picture id="santoto">
                <source srcSet="/clientes/chinca.png" />
                <img src="/clientes/chinca.png" alt="person" />
              </picture>
              <div className="person_info">
                <p>
                  <strong>John Doe</strong>
                </p>
                <p>CEO, Company</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="person">
              <h2>Se tú el proximo</h2>
              <FaUser />
              <div className="person_info">
                <p>
                  En afianzar tu seguridad y la de tus seres queridos con
                  nuestros productos y servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
