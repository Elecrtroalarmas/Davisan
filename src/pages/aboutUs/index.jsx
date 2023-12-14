// AboutUs component

import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import "./index.css";


const AboutUs = () => {
    // Obtén la fecha actual
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
  
    return (
      <>
        <Header />
        <main>
          <section className="section-with-vertical-line">
            
            <div className="timeline">
              <div className="container left-container">
                <img src="../../images/DAVISAN2.png" alt="imagen" />
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                </div>

              </div>
              <div className="container right-container">
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                </div>

              </div>
              <div className="container left-container">
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
                </div>

              </div>
              <div className="container right-container">
                <div className="text-box">
                  <h2>Titulo</h2>
                  <small>2010 -  2011</small>
                  <p>cualquier texto que se pueda poner en este espacio, solamente estoy haciendo espacio
                    para que se vea como se veria el texto en este espacio, no se que mas poner, pero
                    ya se me ocurrira algo.
                  </p>
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

export default AboutUs;

export const Head = () => <title>About Us page</title>;
