import * as React from "react";
import { Link, navigate } from "gatsby";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import FloatingButtonPse from "../../components/floatingButtonPseComponent";
import "./index.css";

const ContactUs = () => {
  const aplicarVacanteUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeDHYZoU_qFq5w2crpgNiBpYuRxRiJvF8BZjyUiGD9NjuSDLw/viewform?usp=header";

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="contactUs">
            <h2>Contáctanos</h2>
            <div className="box">
              {/* Left box with message */}
              <div className="contact form">
                <h3>Postúlate a nuestras vacantes</h3>
                <p>
                  Si estás interesado en formar parte de nuestro equipo, te invitamos a llenar el siguiente formulario. Solo toma unos minutos.
                </p>
                <a
                  href={aplicarVacanteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-button"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#eb3237",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    borderRadius: "5px",
                    marginTop: "10px",
                  }}
                >
                  Llenar Formulario de Vacante
                </a>
              </div>

              {/* Right info box */}
              <div className="contact info">
                <h3>Información de contacto</h3>
                <div className="infoBox">
                  <div>
                    <span>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/25/FFFFFF/marker--v1.png"
                        alt="Ubicación"
                      />
                    </span>
                    <p>
                      Sogamoso, Boyacá <br />
                      Colombia
                    </p>
                  </div>

                  <div>
                    <span>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/25/FFFFFF/new-post--v1.png"
                        alt="Correo"
                      />
                    </span>
                    <a
                      href="mailto:contactenos@davisan.com.co"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contactenos@davisan.com.co
                    </a>
                  </div>

                  <div>
                    <span>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/25/FFFFFF/phone-message.png"
                        alt="Teléfono"
                      />
                    </span>
                    <a
                      href="tel:+573102581814"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +57 310 258 1814
                    </a>
                  </div>

                  <ul className="sci">
                    <li>
                      <a
                        href="https://www.facebook.com/people/Davisan-Ltda/pfbid0pcKk6CKpmmnHUxW9vdJYNEXXNGSHLsduiYweYynF18CPypeUKEXpu27D59kncDUbl/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width="35"
                          height="35"
                          src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/573112280450"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width="35"
                          height="35"
                          src="https://img.icons8.com/ios/35/FFFFFF/whatsapp--v1.png"
                          alt="WhatsApp"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width="35"
                          height="35"
                          src="https://img.icons8.com/ios-filled/35/FFFFFF/linkedin-2--v1.png"
                          alt="LinkedIn"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width="40"
                          height="40"
                          src="https://img.icons8.com/sf-regular/40/FFFFFF/instagram-new.png"
                          alt="Instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* map box */}
              <div className="contact map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.9474911042407!2d-72.93463822453408!3d5.72070399426131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a4570aa0a4e7f%3A0xf7e7d8ef4d4db0b4!2sDAVISAN%20LTDA!5e0!3m2!1ses-419!2sco!4v1703023305046!5m2!1ses-419!2sco"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtonPse />
      <FloatingButton />
    </>
  );
};

export default ContactUs;

export const Head = () => <title>Contáctanos</title>;
