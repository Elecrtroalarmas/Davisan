import React from "react";

export const InfiniteScroll = () => {
  return (
    <div className="container">
      <div
        className="card"
        onClick={() => {
          const element = document.querySelector("#EC");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="card-image">
          <img
            src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            alt="propImage"
          />
        </div>
        <div className="card-content">
          <h1>Escolta</h1>
        </div>
      </div>
      <div
        className="card"
        onClick={() => {
          const element = document.querySelector("#VF");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="card-image">
          <picture>
            <source srcSet="/vigilante.jpeg" />
            <img src="/vigilante.jpeg" alt="Vigilante" />
          </picture>
        </div>
        <div className="card-content">
          <h1>Vigilancia Física</h1>
        </div>
      </div>
      <div
        className="card"
        onClick={() => {
          const element = document.querySelector("#ST");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="card-image">
          <picture>
            <source srcSet="/seguridadFisica.png" />
            <img src="/seguridadFisica.png" alt="Vigilante" />
          </picture>
        </div>
        <div className="card-content">
          <h1>Servicio Técnico</h1>
        </div>
      </div>
      <div
        className="card"
        onClick={() => {
          const element = document.querySelector("#PF");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="card-image">
          <picture>
            <source srcSet="/plantaFisica.png" />
            <img src="/plantaFisica.png" alt="Vigilante" />
          </picture>
        </div>
        <div className="card-content">
          <h1>Planta Física</h1>
        </div>
      </div>
      <div
        className="card"
        onClick={() => {
          const element = document.querySelector("#SM");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="card-image">
        <picture>
            <source srcSet="/seguridadMoto.png" />
            <img src="/seguridadMoto.png" alt="Vigilante" />
          </picture>
        </div>
        <div className="card-content">
          <h1>Supervisión Motorizada</h1>
        </div>
      </div>
      <div
        className="card"
        onClick={() => {
          const element = document.querySelector("#CM");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="card-image">
        <picture>
            <source srcSet="/seguridadFisica.png" />
            <img src="/seguridadFisica.png" alt="Vigilante" />
          </picture>
        </div>
        <div className="card-content">
          <h1>Central de Monitoreo</h1>
        </div>
      </div>
    </div>
  );
};


//Falta Servicio técnico y Escolta
//Mejoramiento de imagen de central de monitoreo, planta física y supervisión motorizada