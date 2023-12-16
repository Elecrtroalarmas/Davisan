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
                    <h3>Como puedo aplicar a una vacante</h3>
                    <div className="content">
                        <p>
                            hola soy un texto de relleno para las preguntas frecuentes
                            por el momento no hay nada que mostrar pero pronto habra
                            contenido para mostrar en esta seccion de preguntas frecuentes
                        </p>
                    </div>
                </label>
            </div>

            <div className="tab">
                <input type="radio" name="acc" id="acc2" />
                <label htmlFor="acc2">
                    <h2>02</h2>
                    <h3>Como puedo aplicar a una vacante</h3>
                    <div className="content">
                        <p>
                            hola soy un texto de relleno para las preguntas frecuentes
                            por el momento no hay nada que mostrar pero pronto habra
                            contenido para mostrar en esta seccion de preguntas frecuentes
                        </p>
                    </div>
                </label>
            </div>


            <div className="tab">
                <input type="radio" name="acc" id="acc3" />
                <label htmlFor="acc3">
                    <h2>03</h2>
                    <h3>Como puedo aplicar a una vacante</h3>
                    <div className="content">
                        <p>
                            hola soy un texto de relleno para las preguntas frecuentes
                            por el momento no hay nada que mostrar pero pronto habra
                            contenido para mostrar en esta seccion de preguntas frecuentes
                        </p>
                    </div>
                </label>
            </div>
            


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
