import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
            <div className="title">
                <h1>Enhance your security with Our Trusted Solutions</h1>
                <p>
                Our solutions are designed to help you to protect your business,
                your customers, and your employees.
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
