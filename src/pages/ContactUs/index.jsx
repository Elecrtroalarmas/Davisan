import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import "./index.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="contactUs">
            <div className="title">
              <h2>Contactanos</h2>
            </div>
            <div className="box">

              {/* form box */}
              <div className="contact form">
                <h3>Envia un mensaje</h3>
                <form>
                  <div className="formBox">
                    <div className="row50">
                      <div className="inputBox">
                        <span>Nombre</span>
                        <input type="text" placeholder="Juan"/>
                      </div>
                      <div className="inputBox">
                        <span>Apellido</span>
                        <input type="text" placeholder="Maldonado"/>
                      </div>
                    </div>

                    <div className="row50">
                      <div className="inputBox">
                        <span>Email</span>
                        <input type="mail" placeholder="juan123@gmail.com"/>
                      </div>
                      <div className="inputBox">
                        <span>Telefono</span>
                        <input type="number" placeholder="318 938 9874"/>
                      </div>
                    </div>

                    <div className="row100">
                      <div className="inputBox">
                        <span>Mensaje</span>
                        <textarea placeholder="Escribe tu mensaje aqui..."></textarea>
                      </div>
                    </div>

                    <div className="row100">
                      <div className="inputBox">
                        <input type="submit" placeholder="Enviar"/>
                      </div>
                    </div>


                  </div>
                </form>
              </div>

              {/* info box */}
              <div className="contact info">
                <h3>Informacion de contacto</h3>
                <div className="infoBox">
                  <div>
                    <span></span>
                    <p>Sogamoso, Boyaca <br/>Colombia</p>
                  </div>
                </div>
              </div>

              {/* map box */}
              <div className="contact map"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
};

export default ContactUs;

export const Head = () => <title>ContactUs Page</title>;
