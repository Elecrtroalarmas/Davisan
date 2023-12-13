// AboutUs component

import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import "./index.css";

const AboutUs = () => {
    // Obtén la fecha actual
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
  
    return (
      <>
        <Header />
        <main>
          <section className="section-with-vertical-line">
            <div className="vertical-line"></div>
  
            {/* Evento 1 */}
            <div className="dot dot-event1"></div>
            <div className="date-title date-title-event1">{formattedDate}</div>
            <div className="info-container info-container-event1">
              <p className="info-text">Tu texto aquí para el evento 1</p>
              <img
                className="info-image"
                src="https://via.placeholder.com/300"
                alt="Placeholder Image"
              />
            </div>
  
            {/* Evento 2 */}
            <div className="dot dot-event2"></div>
            <div className="date-title date-title-event2">{formattedDate}</div>
            <div className="info-container info-container-event2">
              <p className="info-text">Tu texto aquí para el evento 2</p>
              <img
                className="info-image"
                src="https://via.placeholder.com/300"
                alt="Placeholder Image"
              />
            </div>
  
            {/* Evento 3 */}
            <div className="dot dot-event3"></div>
            <div className="date-title date-title-event3">{formattedDate}</div>
            <div className="info-container info-container-event3">
              <p className="info-text">Tu texto aquí para el evento 3</p>
              <img
                className="info-image"
                src="https://via.placeholder.com/300"
                alt="Placeholder Image"
              />
            </div>
  
            {/* Evento 4 */}
            <div className="dot dot-event4"></div>
            <div className="date-title date-title-event4">{formattedDate}</div>
            <div className="info-container info-container-event4">
              <p className="info-text">Tu texto aquí para el evento 4</p>
              <img
                className="info-image"
                src="https://via.placeholder.com/300"
                alt="Placeholder Image"
              />
            </div>
  
            <FloatingButton />
          </section>
        </main>
        <Footer />
      </>
    );
  };

export default AboutUs;

export const Head = () => <title>About Us page</title>;
