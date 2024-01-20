import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import "./index.css";

const preguntasFre = () => {
  return (
    <>
      <Header />
      <main>
        <section className="sectionfaq">
          <div className="containerfaq">
            <h1>Preguntas frecuentes</h1>


            <div className="tab">
                <input type="radio" name="acc" id="acc1" />
                <label htmlFor="acc1">
                    <h2>01</h2>
                    <h3>¿Cómo me puedo contactar de manera inmediata?</h3>
                    <div className="content">
                        <p>
                            Para hablar con uno de los asesores de manera inmediata, 
                            puedes comunicarte al siguiente número de WhatsApp:
                            <br/>
                            <br/>
                            <a target="blank" href="https://wa.me/573112280450">311 228 0450</a>
                        </p>
                    </div>
                </label>
            </div>

            <div className="tab">
                <input type="radio" name="acc" id="acc2" />
                <label htmlFor="acc2">
                    <h2>02</h2>
                    <h3>¿Cómo me puedo hacer mi pago PSE?</h3>
                    <div className="content">
                        <p>
                          Para poder realizar tu pago PSE, 
                          puedes dirigirte al siguiente link:
                          <br />
                          <br />
                          Link
                        </p>
                    </div>
                </label>
            </div>


            <div className="tab">
                <input type="radio" name="acc" id="acc3" />
                <label htmlFor="acc3">
                    <h2>03</h2>
                    <h3>¿Cómo puedo aplicar a una vacante?</h3>
                    <div className="content">
                        <p>
                        Para aplicar a una de nuestras vacantes, puedes enviarnos un correo a 
                        nuestro correo:
                        <br />
                        <br />    
                        <a
                          href="mailto:contactenos@davisan.com.co"
                          target="_blank">
                             contactenos@davisan.com.co
                        </a>
                        </p>
                    </div>
                </label>
            </div>
            
            {/* <div className="tab">
                <input type="radio" name="acc" id="acc4" />
                <label htmlFor="acc4">
                    <h2>04</h2>
                    <h3>Como puedo aplicar a una vacante</h3>
                    <div className="content">
                        <p>
                            hola soy un texto de relleno para las preguntas frecuentes
                            por el momento no hay nada que mostrar pero pronto habra
                            contenido para mostrar en esta seccion de preguntas frecuentes
                        </p>
                    </div>
                </label>
            </div> */}

          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
};

export default preguntasFre;

export const Head = () => <title>Preguntas Frecuentes</title>;
