import React from "react";
import "./404.css";

const Error = () => {
  return (
    <section className="page_404">
      <div className="four_zero_four_bg">
        <h1>404</h1>
      </div>

      <div className="contant_box_404">
        <h3>Parece que estás perdido</h3>
        <p>¡La página que estás buscando no está disponible!</p>
        <a href="/" className="link_404">
          Ir a la página de inicio
        </a>
      </div>
    </section>
  );
};

export default Error;
export const Head = () => <title>Error 404</title>;
