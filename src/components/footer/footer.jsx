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
            <h4>For Business</h4>
            <a href="/test">
              <p>Employer</p>
            </a>
            <a href="/health">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="/testing">
              <p>Financial</p>
            </a>
            <a href="/testing">
              <p>Orientation</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Información</h4>
            <a href="/employers">
              <Link to="/preguntasFre">FAQ</Link>
            </a>
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
          <a href="/terms">
            <div>
              <p>Privacidad</p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p>Seguridad</p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p>Política de Cookies</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
