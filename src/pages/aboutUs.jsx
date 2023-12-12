import * as React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/buttons/button";
import FloatingButton from "../components/floatingButtonComponent";
import "./aboutUsStyle.css";

const AboutUs = () => {
    return(
        <>
            <Header />
            <main>
                <section>
                    <div className="promt">
                        <h1>Enhance your security with Our Trusted Solutions</h1>
                        <p>
                            Our solutions are designed to help you to protect your business,
                            your customers, and your employees.
                        </p>
                        <div className="options">
                            <Button text="Learn More" />
                            <Button text="Contact us" />
                        </div>
                    </div>
                </section>
                <section>
                    <div class="contact-container">
                        <div class="contact-box">
                            <h2>Contactanos</h2>
                            <p>Información de contacto</p>
                        </div>
                        <div class="contact-box">
                            <h2>Información</h2>
                            <p>Email: contacto@example.com</p>
                            <p>Teléfono: (123) 456-7890</p>
                            <p>Dirección: Calle Ejemplo, Ciudad</p>
                        </div>
                    </div>
                    <div id="map">
                        <img src="https://via.placeholder.com/1000x500" alt="Mapa"></img>
                    </div>
                </section>
            </main>
            <Footer/>
            <FloatingButton />
        </>
    );
}

export default AboutUs;

export const Head = () => <title>About Us Page</title>;
