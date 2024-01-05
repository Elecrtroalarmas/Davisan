// AboutUs component

import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import "./index.css";


const AboutUs = () => {
  
    return (
      <>
        <Header />
        <main>
        
          <section className="about-us-section">
            <div className="about-us-container">
              <h2>Acerca de Nosotros</h2>
              <div className="about-us-content">
                <img src="https://davisan.com.co/img/trabajos/full/image-01-full.jpg" alt="Imagen de DAVISAN SECURITY LTDA" />
                <div className="text-box">
                  <p>
                    DAVISAN SECURITY LTDA es una empresa Colombiana especializada en ofrecer servicios de seguridad privada integral. 
                    Nuestro equipo profesional, altamente capacitado, se distingue por su respeto, determinación 
                    y respaldo tecnológico de vanguardia. Nos dedicamos a proporcionar tranquilidad, seguridad 
                    y confianza a nuestros clientes mediante soluciones integrales que abarcan tanto 
                    la protección física como electrónica.
                  </p>
                  <div className="arrow-circle">
                    <div className="arrow"></div>
                    <p className="more-info">Conocenos más</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          <section className="mission-vision-section">
  <div className="mission-vision-container">
    <h2>Misión y Visión</h2>

    <div className="mission">
      <h3>Misión</h3>
      <p>
        Brindar tranquilidad, seguridad y confianza a nuestros clientes, visitantes y usuarios, a través de soluciones integrales de protección física y electrónica, con un equipo humano Profesional, decidido y respetuoso, soportados en tecnología de punta.
      </p>
    </div>

    <div className="vision">
      <h3>Visión</h3>
      <p>
        DAVISAN SECURITY LTDA., será reconocida en Colombia como la empresa líder en brindar soluciones integrales de seguridad física, electrónica y satelital, brindando protección y tranquilidad a empresarios y familias, que depositan la confianza en nuestra organización.
      </p>
    </div>

  </div>
</section>



          <section className="section-with-vertical-line">

            
            <div className="timeline">

              {/* fecha 1 */}
              <div className="container left-container">
                <img src="data:image/png;base64,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" alt="imagen" />
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>  
                  <span className="left-container-arrow"></span>
                </div>
              </div>


              {/* fecha 2 */}
              <div className="container right-container">
                <img src="data:image/png;base64,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" alt="imagen" />
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                  <span className="right-container-arrow"></span>
                </div>

              </div>


              {/* fecha 3 */}
              <div className="container left-container">
                <img src="data:image/png;base64,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" alt="imagen" />
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                  <span className="left-container-arrow"></span>
                </div>
              </div>


              {/* fecha 4 */}
              <div className="container right-container">
                <img src="data:image/png;base64,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" alt="imagen" />
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                  <span className="right-container-arrow"></span>
                </div>
              </div>

              {/* fecha 5 */}
              <div className="container left-container">
                <img src="data:image/png;base64,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" alt="imagen" />
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                  <span className="left-container-arrow"></span>
                </div>
              </div>

              {/* fecha 6 */}
              <div className="container right-container">
                <img src="data:image/png;base64,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" alt="imagen" />
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                  <span className="right-container-arrow"></span>
                </div>
              </div>

            </div>

          </section>

          <section>
            <h1>Seccion de organigrama</h1>
          </section>
        </main>
        <Footer />
        <FloatingButton />
      </>
    );
  };

export default AboutUs;

export const Head = () => <title>About Us page</title>;
