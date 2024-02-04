import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import { IoCloudOffline, IoCloudDone } from "react-icons/io5";
import { InfiniteScroll } from "../../components/infinite-scroll/InfiniteScroll";
import "./index.css";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="infinite-scroll">
          <h1>Conoce Nuestros Servicios</h1>
          <div className="father">
            <InfiniteScroll />
            <InfiniteScroll />
          </div>
        </section>
        <section className="benefits-section" id="EC">
          <div className="promt">
            <h1>ESCOLTA</h1>
            <p>
              Personal de escoltas privados con acompañamiento, defensa y
              protección de personas determinadas y transporte de mercancias;
              impidiendo que sean objeto de agresiones o actos delictivos.
            </p>
            <p>
              DAVISAN SECURITY LTDA cuenta con la licencia para prestar este
              servicio certificado y especializado.{" "}
            </p>
          </div>
          <div className="image">
            <picture>
              <img src="/Escoltas.png" alt="Vigilante" />
            </picture>
          </div>
        </section>
        <section className="services-section" id="SM">
          <div className="promt">
            <h1>SUPERVISIÓN MOTORIZADA</h1>
            <p>
              La empresa cuenta con supervisores armados, debidamente
              capacitados en las diferentes areas entre otros:
            </p>
            <div className="options">
              <div className="n1">
                <h1>Gestión de personal</h1>
                <p>
                  evaluación física y mental, conocimientos de seguridad y del
                  puesto, y apoyo logístico y formación continua para los
                  guardias de seguridad.{" "}
                </p>
              </div>
              <div className="n2">
                <h1>Seguridad Física</h1>
                <p>
                  Conocimiento y evaluación de las instalaciones referente a la
                  seguridad física y manejo de armas
                </p>
              </div>
            </div>
            <p>
              Acreditados ante la Superintendencia de Vigilancia y Seguridad
              Privada; para atender cualquier tipo de novedad del servicio con
              disponibilidad 24/7 todos los días del año. Estos realizan rondas
              diarias en los diferentes puestos.
            </p>
            <div className="image">
              <picture>
                <source srcSet="/seguridad_motorizada.JPG" />
                <img src="/seguridad_motorizada.JPG" alt="Vigilante" />
              </picture>
            </div>
          </div>
        </section>
        <section className="benefits-section inverse" id="PF">
          <div className="promt">
            <h1>PLANTA FÍSICA</h1>
            <p>
              DAVISAN SECURITY LTDA., ubicada en la ciudad de Sogamoso; como
              sede principal, presta sus servicios en los Departamentos de
              Boyacá y Casanare, con una política de crecimento y expansión a
              nivel nacional.
            </p>
            <p>
              Cuenta con capacidad financiera e intelectual, con una trayectoria
              en el mercado de la seguridad privada con medios fisico y
              electronico por más de 25 años.
            </p>
            <p>
              Contamos recurso humano profesional y técnologo, con suficiente
              expereiencia, en Asesoría, investigación y Consultoria, gerencia
              de mercados y gerencia General.
            </p>
          </div>
          <div className="image">
            <picture>
              <img src="/Seguridad_fisica.png" alt="Vigilante" />
            </picture>
          </div>
        </section>
        <section className="benefits-section" id="ST">
          <div className="promt">
            <h1>SERVICIO TÉCNICO</h1>
            <p>
              Contamos con talento humano (técnicos, operadores de medios
              tecnológicos y supervisores) altamente calificados y certificados.
            </p>
            <p>
              Quienes dentro de nuestra programación desde la dirección de
              operaciones, asisten vía:
            </p>
            <div className="options">
              <div className="n1">
                <h1>
                  <IoCloudDone />
                </h1>
                <p>ONLINE</p>
              </div>
              <div className="n2">
                <h1>
                  <IoCloudOffline />
                </h1>
                <p>Conexión Remota</p>
              </div>
            </div>
            <p>
              Contamos recurso humano profesional y técnologo, con suficiente
              expereiencia, en Asesoría, investigación y Consultoria, gerencia
              de mercados y gerencia General.
            </p>
          </div>
          <div className="image">
            <picture>
              <img src="/tech_service.webp" alt="Vigilante" />
            </picture>
          </div>
        </section>
        <section className="services-section" id="CM">
          <div className="promt">
            <h1>CENTRAL DE MONITOREO</h1>
            <p>
              DAVISAN SECURITY LTDA cuenta con una central de monitoreo 24/7
              certificada en la ciudad de Sogamoso.
            </p>
            <p>
              Espacio físico, donde personas especializadas en manejo de eventos
              en seguridad física y electronica hacen seguimiento 24/7 a:
            </p>
            <div className="options">
              <div className="n1">
                <h1>Supervisión Ágil de Seguridad</h1>
                <p>
                  Supervisores motorizados y armados con reacción inmediata para
                  atender eventos de seguridad en las diferentes instalaciones
                  de nuestros clientes.
                </p>
              </div>
              <div className="n2">
                <h1>Retro-alimentación Efectiva</h1>
                <p>
                  Supervisores con el compromiso de retroalimentar a nuestros
                  hombres de seguridad que laboran en los puestos.
                </p>
              </div>
              <div className="n1">
                <h1>Vigilancia Continua 24/7</h1>
                <p>
                  Se revisan las señales y/o eventos de los sistemas de alarma
                  supervisando y controlando 24/7 con cumplimiento de protocolos
                  de seguridad
                </p>
              </div>
              <div className="n2">
                <h1>Respuesta Integral Inmediata</h1>
                <p>
                  Notificar al cliente, enviar equipo técnico para
                  mantenimiento, contactar a las autoridades competentes, enviar
                  a personal de supervisión motorizado y armado.
                </p>
              </div>
            </div>
            <p>
              Si, en el sitio se cuenta con sistema de cámaras de seguridad, la
              empresa como valor agregado y con previa autorización del cliente
              configura el sistema de CCTV para ser visualizados en nuestra
              Central de Monitoreo; con el objetivo que solo en caso de
              intrusión y/o pánico, se pueda validar de forma remota si se trata
              de una falsa alarma o de un evento en curso.
            </p>
            <div className="image">
              <picture>
                <img src="/Central_monitoreo.png" alt="Vigilante" />
              </picture>
            </div>
          </div>
        </section>
        <section className="benefits-section" id="VF">
          <div className="promt">
            <h1>VIGILANCIA FÍSICA CON O SIN ARMA</h1>
            <p>
              Personal uniformado, identificado y acreditado por la
              Superintendencia de Vigilancia y Seguridad Privada conforme a lo
              estipulado con la misma. Personal disponible para relevos,
              emergencias o reacciones.
            </p>
            <p>
              Personal seleccionado con su respectivo estudio de confiabilidad,
              análisis y verificación de referencias, verificación de
              antecedentes, competencias necesaria para su seguridad y
              confianza.
            </p>
          </div>
          <div className="image">
            <picture>
              <img src="/vigilante.jpeg" alt="Vigilante" />
            </picture>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
};

export default ServicesPage;

export const Head = () => <title>Servicios</title>;
