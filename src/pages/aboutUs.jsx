import * as React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import FloatingButton from "../components/floatingButtonComponent";
import "./aboutUsStyle.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="contact-container">
            <div className="container">
                <div className="contact-box">
                  <h2>Contactanos</h2>
                  <p>Información de contacto</p>
                </div>
                  <div className="contact-box">
                    <h2>Información</h2>
                    <p>Email: contacto@example.com</p>
                    <p>Teléfono: (123) 456-7890</p>
                    <p>Dirección: Calle Ejemplo, Ciudad</p>
                  </div>
            </div>
            <div className="map">
              <img src="https://via.placeholder.com/1000x500" alt="Mapa"></img>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
};

export default AboutUs;

export const Head = () => <title>About Us Page</title>;
