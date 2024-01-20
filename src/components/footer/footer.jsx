import React from "react";
import { Link, navigate } from "gatsby";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="sb-footer section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <picture
              onClick={() => navigate("https://www.supervigilancia.gov.co/")}
            >
              <source srcSet="/superVigilancia.png" />
              <img src="/superVigilancia.png" alt="Super Vigilancia" />
            </picture>
          </div>

          <div className="sb-footer-links-div">
            <h4>Links de interes</h4>
            <Link to="/">Pagina principal</Link>
            <br />
            <Link to="/aboutUs">Acarca De Nosotros</Link>
            <br />
            <Link to="/ContactUs">Contáctanos</Link>
            <br />
            <Link to="/services">Servicios</Link> 
          </div>
          <div className="sb-footer-links-div">
            <h4>Información</h4>    
            <Link to="/preguntasFre">Preguntas Frecuentes</Link> 
          </div>
          <div className="sb-footer-links-div">
            <h4>Redes Sociales</h4>
            <div className="socialmedia">
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="sb-footer-below">
        <div className="sb-footer-copy">
          <p>
            @{new Date().getFullYear()} Davisan. Todos los derechos reservados.
          </p>
        </div>
        <div className="sb-footer-below-links">
          <a href="/terms">
            <div>
              <p>Terminos y condiciones</p>
            </div>
          </a>   
        </div>
      </div>
    </footer>
  );
}

export default Footer;
