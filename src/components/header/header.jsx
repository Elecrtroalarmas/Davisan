import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { Link } from "gatsby";

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
      <div className="logo">
        <picture>
          <source srcSet="icon.png" />
          <img src="/icon.png" alt="logo" className="logo" />
        </picture>
        <h1>Davisan</h1>
      </div>
      <nav ref={navRef}>
        <ul>
          <li>
            <Link
              to="/aboutUs"
              onClick={() => handleLinkClick("about")}
              className={activeLink === "aboutUs/" ? "active" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => handleLinkClick("services")}
              className={activeLink === "services/" ? "active" : ""}
            >
              services
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              onClick={() => handleLinkClick("contact")}
              className={activeLink === "ContactUs/" ? "active" : ""}
            >
              Contact Us
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
