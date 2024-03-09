import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { Link, navigate } from "gatsby";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const navRef = useRef();

  useEffect(() => {
    const initialActiveLink = window.location.pathname.replace("/", "");
    console.log(initialActiveLink);
    setActiveLink(initialActiveLink);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo" onClick={() => navigate('/')}>
        <picture>
          <source srcSet="/icon.png" />
          <img src="/icon.png" alt="logo" className="logo" />
        </picture>
        <picture>
          <source srcSet="/nombreDavisan.png" />
          <img src="/nombre.png" alt="logo" className="logoname" />
        </picture>
      </div>
      <nav ref={navRef}>
        <ul>
          <li>
            <Link
              to="/aboutUs"
              onClick={() => handleLinkClick("aboutUs/")}
              className={activeLink === "aboutUs/" ? "active" : ""}
            >
              Acerca de nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => handleLinkClick("services/")}
              className={activeLink === "services/" ? "active" : ""}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              onClick={() => handleLinkClick("ContactUs/")}
              className={activeLink === "ContactUs/" ? "active" : ""}
            >
              Contáctanos
            </Link>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </ul>
      </nav>
      <div className="burger-menu">
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
