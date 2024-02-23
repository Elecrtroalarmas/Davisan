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
              <p>Protegemos lo que verdaderamente importa</p>
              <h1>Más de una Década de Excelencia protegiendo</h1>
              <p>
                Somos una empresa con una experiencia de 10 años en el mercado,
                Comercial, Residencial. Con un grupo de clientes superior a los
                329 abonados en Monitoreo de alarma para sus instalaciones.
              </p>
            </div>
            <div className="elements">
              <div className="item">
                <RiBox2Line />

                <h1>Vigilancia Humana Profesional</h1>
                <p>
                  Más de 25 clientes confían en nuestro equipo de vigilancia
                  humana para proteger sus espacios comerciales y residenciales
                  con profesionalismo y atención personalizada.
                </p>
              </div>
              <div className="item">
                <RiBox2Line />

                <h1>Monitoreo Avanzado de Alarmas</h1>
                <p>
                  Más de 329 clientes confían en nuestro servicio de monitoreo
                  de alarmas para proteger sus propiedades. Con 10 años de
                  experiencia, prometemos una respuesta rápida y efectiva las 24
                  horas del día.
                </p>
              </div>
              <div className="item">
                <RiBox2Line />

                <h1>Servicios de Consultoría en Seguridad Integral</h1>
                <p>
                  Nuestro equipo de seguridad ofrece consultoría para negocios y
                  hogares. Nos enfocamos en tus necesidades para proteger tus
                  activos más importantes.
                </p>
              </div>
            </div>
            <div className="options">
              <div className="n1">
                <Button text="Learn More" />
              </div>
              <div className="n2">
                <Button text="Learn More" />
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
