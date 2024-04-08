import * as React from "react";
import { useState } from "react";
import { Link, navigate } from "gatsby";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import FloatingButtonPse from "../../components/floatingButtonPseComponent"
import "./index.css";

const ContactUs = () => {
  // State to manage form fields and errors
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [formErrors, setFormErrors] = useState(null);

  // Function to validate the form fields
  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key].trim() === "") {
        console.log(formData)
        setFormErrors("Do not leave blank spaces");
        return; // Stop validation if there are empty fields
      }
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setFormErrors("Enter a valid Email");
      return; // Stop validation if the email does not have a valid format
    }
    // Si no hay errores, continuar con el envío del formulario
    setFormErrors(null);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="contactUs">
            <h2>Contactanos</h2>
            <div className="box">
              {/* form box */}
              <div className="contact form">
                <h3>Envia un mensaje</h3>
                <form
                  action="https://formspree.io/f/mgegvlqq"
                  method="POST"
                >
                  <div className="formBox">
                    <div className="row50">
                      <div className="inputBox">
                        <span>Nombre</span>
                        <input type="text" placeholder="Juan" name="nombre"/>
                      </div>
                      <div className="inputBox">
                        <span>Apellido</span>
                        <input type="text" placeholder="Maldonado" name="apellido"/>
                      </div>
                    </div>

                    <div className="row50">
                      <div className="inputBox">
                        <span>Email</span>
                        <input type="mail" placeholder="juan123@gmail.com" name="email"/>
                      </div>
                      <div className="inputBox">
                        <span>Telefono</span>
                        <input type="number" placeholder="318 938 9874" name="telefono"/>
                      </div>
                    </div>

                    <div className="row100">
                      <div className="inputBox">
                        <span>Mensaje</span>
                        <textarea placeholder="Escribe tu mensaje aqui..." name="mensaje"></textarea>
                      </div>
                    </div>

                    <div className="row100">
                      <div className="inputBox">
                        <input type="submit" placeholder="Enviar" />
                      </div>
                    </div>
                  </div>
                  {formErrors && <p className="error">{formErrors}</p>}
                </form>
              </div>

              {/* info box */}
              <div className="contact info">
                <h3>Informacion de contacto</h3>
                <div className="infoBox">
                  <div>
                    <span>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/25/FFFFFF/marker--v1.png"
                        alt="marker--v1"
                      />
                    </span>
                    <p>
                      Sogamoso, Boyaca <br />
                      Colombia
                    </p>
                  </div>

                  <div>
                    <span>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/25/FFFFFF/new-post--v1.png"
                        alt="new-post--v1"
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
                        alt="phone-message"
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
                          alt="facebook-new"
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
                          alt="whatsapp--v1"/>
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
                          alt="linkedin-2--v1"
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
                          alt="instagram-new"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* map box */}
              <div className="contact map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.9474911042407!2d-72.93463822453408!3d5.72070399426131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a4570aa0a4e7f%3A0xf7e7d8ef4d4db0b4!2sDAVISAN%20LTDA!5e0!3m2!1ses-419!2sco!4v1703023305046!5m2!1ses-419!2sco" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
