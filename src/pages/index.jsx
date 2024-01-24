import * as React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/buttons/button";
import { CardSwipe } from "../components/card-swiper/card-swiper";
import { Link, navigate } from "gatsby";
import { RiBox2Line } from "react-icons/ri";
import "./root.css";
import "./index.css";
import FloatingButton from "../components/floatingButtonComponent";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>


        <section className="main-banner">
          <div className="promt">
            <h1>Slogan</h1>
            <p>
              Our solutions are designed to help you to protect your business,
              your customers, and your employees.
            </p>
            <div className="options">
              <Link to="/aboutUs"><Button text="Conocenos" /></Link>
              <Link to="/ContactUs" ><Button text="Contactanos"/></Link>           
            </div>
          </div>
        </section>





        <hr />


        <section className="valores-section">
            <div className='valorescon' id='valorescon'>
              <div className="containerValores">
                <h1 className='subTitulo'>Por qué elegirnos </h1>
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



        
        <hr />
        <section className="services-section">
          <div className="promt">
            <div className="sub_promt">
              <p>Protecting What Matters Most</p>
              <h1>Advanced Surveillance Solutions</h1>
              <p>
                Our physical security products provide cutting-edge technology
                and reliable solutions to keep your property, assets, and loved
                ones safe. With our advanced surveillance systems, access
                control systems, and intrusion detection systems, you can have
                peace of mind knowing that your security is in good hands. We
                also offer 24/7 monitoring services to ensure round-the-clock
                protection.
              </p>
            </div>
            <div className="elements">
              <div className="item">
                <RiBox2Line />

                <h1>Access Control Systems</h1>
                <p>
                  Our advanced surveillance solutions utilize state-of-the-art
                  cameras and analytics to provide real-time monitoring and
                  proactive threat detection.
                </p>
              </div>
              <div className="item">
                <RiBox2Line />

                <h1>Intrusion Detection Systems</h1>
                <p>
                  Our access control systems allow you to restrict access to
                  authorized personnel only, enhancing security and preventing
                  unauthorized entry.
                </p>
              </div>
              <div className="item">
                <RiBox2Line />

                <h1>24/7 Monitoring Services</h1>
                <p>
                  Our intrusion detection systems use advanced sensors and
                  alarms to detect and deter intruders, providing an additional
                  layer of security for your property.
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
        <section className="CTA-section">
          <div className="promt">
            <div className="sub_promt">
              <h1>Unlock Your Security Potential</h1>
              <p>
                Schedule a consultation or request more information to learn how
                our physical security solutions can protect your business.
              </p>
              <div className="options">
                <Link to="/services"><Button text="Nuestros servicios" /></Link>
                <Link to="/ContactUs" ><Button text="Contactanos"/></Link> 
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
};

export default IndexPage;
