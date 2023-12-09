import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./index.css";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="title">
          <h1>Servicios</h1>
          <p>
            Our solutions are designed to help you to protect your business,
            your customers, and your employees.
          </p>
        </section>
        <section className="infinite-scroll">
          <div className="n1">
            <FaArrowLeftLong />
          </div>
          <div className="n2">
            <FaArrowLeftLong />
          </div>
          <div className="father">
            <div className="container">
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                    alt="propImage"
                  />
                </div>
                <div className="card-content">
                  <h1>Card Title</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                    alt="propImage"
                  />
                </div>
                <div className="card-content">
                  <h1>Card Title</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                    alt="propImage"
                  />
                </div>
                <div className="card-content">
                  <h1>Card Title</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                    alt="propImage"
                  />
                </div>
                <div className="card-content">
                  <h1>Card Title</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                    alt="propImage"
                  />
                </div>
                <div className="card-content">
                  <h1>Card Title</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                    alt="propImage"
                  />
                </div>
                <div className="card-content">
                  <h1>Card Title</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum. Quis
                    voluptate, voluptas, voluptatem, quibusdam quia magni
                    reprehenderit quos quod unde doloremque voluptatum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
