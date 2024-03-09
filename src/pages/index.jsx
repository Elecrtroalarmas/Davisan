import * as React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/buttons/button";
import { CardSwipe } from "../components/card-swiper/card-swiper";
import { Link } from "gatsby";
import { RiBox2Line } from "react-icons/ri";
import "./root.css";
import "./index.css";
import FloatingButton from "../components/floatingButtonComponent";
import FloatingButtonPse from "../components/floatingButtonPseComponent";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="main-banner">
          <div className="promt">
            <h1>Tu seguridad nuestra prioridad</h1>
            <p>
              DAVISAN SECURITY LTDA, empresa de Seguridad y Vigilancia Privada
              netamente colombiana, con visión de servicios para toda la
              Sociedad.
            </p>
            <div className="options">
              <Link to="/aboutUs">
                <Button text="Conocenos" />
              </Link>
              <Link to="/ContactUs">
                <Button text="Contactanos" />
              </Link>
            </div>
          </div>
        </section>

        <hr />

        <section className="valores-section">
          <div className="valorescon" id="valorescon">
            <div className="containerValores">
              <h1 className="subTitulo">Por qué elegirnos </h1>
              <div className="valoresList">
                <div>
                  <picture>
                    <source srcSet="/calificacion.png" />
                    <img src="/calificacion.png" alt="personal calificado" />
                  </picture>
                  <h2>Personal calificado</h2>
                </div>
                <div>
                  <picture>
                    <source srcSet="/consultoria.png" />
                    <img src="/consultoria.png" alt="Consultoria" />
                  </picture>
                  <h2>Expertos en consultoría</h2>
                </div>
                <div>
                  <picture>
                    <source srcSet="/integracion.png" />
                    <img src="/integracion.png" alt="integracion tecnologica" />
                  </picture>
                  <h2>Integración tecnológica</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section">
          <div className="promt">
            <div className="sub_promt">
              <h1>Más de una Década de Excelencia protegiendo</h1>
              <p>Protegemos lo que verdaderamente importa</p>        

            </div>
            <div className="elements">
              <div className="item">
                <img  
                  width="64" 
                  height="64" 
                  src="https://img.icons8.com/ios/64/security-guard.png" 
                  alt="security-guard"
                />

                <h1>Vigilancia Humana Profesional</h1>
                <p>
                  Más de 25 clientes confían en nuestro equipo de vigilancia
                  humana para proteger sus espacios comerciales y residenciales
                  con profesionalismo y atención personalizada.
                </p>
              </div>
              <div className="item">
                <img 
                  width="64" 
                  height="64" 
                  src="https://img.icons8.com/pastel-glyph/64/private-wall-mount-camera.png" 
                  alt="private-wall-mount-camera"
                />

                <h1>Monitoreo Avanzado de Alarmas</h1>
                <p>
                  Más de 329 abonados confían en nuestro servicio de monitoreo
                  de alarmas para proteger sus propiedades. 
                </p>
              </div>
              <div className="item">
                <img 
                  width="64" 
                  height="64" 
                  src="https://img.icons8.com/glyph-neue/64/clock--v1.png" 
                  alt="clock--v1"
                />

                <h1>Cuenta con nuestra trayectoria</h1>
                <p>
                  Con más de 10 años de experiencia, prometemos una respuesta rápida y 
                  efectiva las 24 horas del día.
                </p>
              </div>
            </div>
            <div className="options">
              <div className="n2">
                <Link
                  to="/aboutUs"
                  className="active"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  <Button text="Leer más" /> 
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="promt">
            <CardSwipe />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtonPse />
      <FloatingButton />
    </>
  );
};

export default IndexPage;
