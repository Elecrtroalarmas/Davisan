import * as React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { Link } from "gatsby";

export default function Header() {
  const navRef = React.useRef();

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
            <Link className="active" to="/aboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
          <Link to="/ContactUs">
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
