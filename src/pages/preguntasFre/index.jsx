import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FloatingButton from "../../components/floatingButtonComponent";
import FloatingButtonPse from "../../components/floatingButtonPseComponent"
import "./index.css";

const preguntasFre = () => {
  return (
    <>
      <Header />
      <main>
        <section className="sectionfaq">
          <div className="containerfaq">
            <h1>Preguntas frecuentes</h1>


            <div className="tab">
                <input type="radio" name="acc" id="acc1" />
                <label htmlFor="acc1">
                    <h2>01</h2>
                    <h3>¿Cómo me puedo contactar de manera inmediata?</h3>
                    <div className="content">
                        <p>
                            Para hablar con uno de los asesores de manera inmediata, 
                            puedes comunicarte al siguiente número de WhatsApp:
                            <br/>
                            <br/>
                            <a target="blank" href="https://wa.me/573112280450">311 228 0450</a>
                        </p>
                    </div>
                </label>
            </div>

            <div className="tab">
                <input type="radio" name="acc" id="acc2" />
                <label htmlFor="acc2">
                    <h2>02</h2>
                    <h3>¿Cómo me puedo hacer mi pago PSE?</h3>
                    <div className="content">
                        <p>
                          Para poder realizar tu pago PSE, 
                          puedes dirigirte al siguiente link:
                          <br />
                          <br />
                          <a target="blank" href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=3967&searchedCategoryId=&searchedAgreementName=DAVISAN%20LTDA">
                            Pago amigo Davisan
                          </a>
                        </p>
                    </div>
                </label>
            </div>


            <div className="tab">
              <input type="radio" name="acc" id="acc3" />
              <label htmlFor="acc3">
                <h2>03</h2>
                <h3>¿Cómo puedo aplicar a una vacante?</h3>
                <div className="content">
                  <p>
                    Para aplicar a una de nuestras vacantes, haz clic en el siguiente enlace para completar el formulario:
                  <br />
                  <br />
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeDHYZoU_qFq5w2crpgNiBpYuRxRiJvF8BZjyUiGD9NjuSDLw/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#eb3237',
                      fontWeight: 'bold',
                      textDecoration: 'underline'
                    }}
                  >
                    Formulario de Aplicación
                  </a>
                  </p>
                </div>
              </label>
            </div>


            <h1 className="second-title">Dirección de operaciones</h1>
            
            <div className="tab">
                <input type="radio" name="acc" id="acc4" />
                <label htmlFor="acc4">
                    <h2>04</h2>
                    <h3>¿Si necesito cotizar un servicio de vigilancia privada a donde puedo acudir?</h3>
                    <div className="content">
                        <p>
                          Con gusto te apoyamos en el correo electrónico:
                          <br />
                          <br />
                          <a
                            href="mailto:dir.operaciones@davisan.com.co"
                            target="_blank">
                              dir.operaciones@davisan.com.co
                          </a>
                          <br />
                          <br />                      
                          o al WhatsApp: 
                          <br />
                          <br />
                          <a target="blank" href="https://wa.me/573185864703">318 586 4703</a> 
                          </p>      
                    </div>
                </label>
            </div>

            <div className="tab">
                <input type="radio" name="acc" id="acc5" />
                <label htmlFor="acc5">
                    <h2>05</h2>
                    <h3>¿Cuáles son los servicios de vigilancia que prestan?</h3>
                    <div className="content">
                        <p>
                          Nuestro portafolio, nos permite brindarle seguridad integral, 
                          con recurso humano, con y sin armas, consultoría asesoría e 
                          investigación y tecnología de punta.
                        </p>
                    </div>
                </label>
            </div>


            <div className="tab">
                <input type="radio" name="acc" id="acc6" />
                <label htmlFor="acc6">
                    <h2>06</h2>
                    <h3>¿Los servicios de vigilancia cuentan con supervisión?</h3>
                    <div className="content">
                        <p>
                          Si, es un servicio 24/7 y hace parte integral de nuestro portafolio 
                          y contrato con el cliente.
                        </p>
                    </div>
                </label>
            </div>


            <div className="tab">
                <input type="radio" name="acc" id="acc7" />
                <label htmlFor="acc7">
                    <h2>07</h2>
                    <h3>¿Por qué contratar a DAVISAN SECURITY LTDA? </h3>
                    <div className="content">
                        <p>
                          Empresa de la Región de Boyacá, con cobertura a Nivel Nacional, 
                          que ofrece cumplimiento y estabilidad laboral y comercial, con 
                          estrategias de mercado. Cuenta con Directivos Profesionales e 
                          ingenieros, expertos en Seguridad física, certificados y avalados 
                          por la Supervigilancia Privada.
                        </p>
                    </div>
                </label>
            </div>

            <div className="tab">
                <input type="radio" name="acc" id="acc8" />
                <label htmlFor="acc8">
                    <h2>08</h2>
                    <h3>¿Por qué contratar a la empresa de vigilancia Davisan Security Ltda. <strong>sí otras cobran menos por sus servicios?</strong></h3>
                    <div className="content">
                        <p>
                            <ul>
                              <li>
                              •	DAVISAN SECURITY LTDA., Empresa comprometida con el 
                                cumplimiento de la Ley, estamos regulados por la 
                                Superintendencia de Vigilancia y Seguridad Privada. 
                              </li>
                              <br />
                              <br />
                              <li>
                              •	Debemos tener en cuenta que para el sector Residencial estratos
                                1, 2 y 3 la tarifa es diferencial y tiene un costo posiblemente
                                inferior, pero no puede vulnerar los derechos de los trabajadores.
                              </li>
                              <br />
                              <br />
                              <li>
                              •	Algunas empresas no cuentan con el grupo de Profesionales 
                                necesario para la operación, y un solo funcionario cumple 
                                múltiples cargos, desde la Gerencia y hasta relevo de su 
                                personal Operativo. 
                              </li>
                            </ul>
                        </p>
                    </div>
                </label>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtonPse />
      <FloatingButton />
    </>
  );
};

export default preguntasFre;

export const Head = () => <title>Preguntas Frecuentes</title>;
