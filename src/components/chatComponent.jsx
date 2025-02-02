import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import '../styles/chatStyle.css';
import { Link } from "gatsby";

const chatTheme = {
  background: '#f5f8fb', 
  fontFamily: 'Montserrat',
  headerBgColor: '#eb3237',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#eff5fc', 
  botFontColor: '#000000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class ChatComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  setName = (name) => {
    this.setState({ name });
  };

  render() {

    const whatsappUrl = 'https://wa.me/573112280450'; 
    const pagoDeFacturasUrl = 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=3967&searchedCategoryId=&searchedAgreementName=DAVISAN%20LTDA'; 
    const aplicarVacanteUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeDHYZoU_qFq5w2crpgNiBpYuRxRiJvF8BZjyUiGD9NjuSDLw/viewform?usp=header';

    return (
      <ThemeProvider theme={chatTheme}>
        
      <ChatBot
        
        headerTitle="Amanda"

        botAvatar="https://cdn-icons-png.flaticon.com/512/4598/4598770.png"

        steps={[
          {
            id: '1',
            message: 'Hola, soy Amanda, parte del equipo de Davisan. ¿Cuál es tu nombre?',
            trigger: 'get_name',
          },
          {
            id: 'get_name',
            user: true,
            trigger: '3',
            validator: (value) => {
              if (!value) {
                return 'Por favor, ingresa tu nombre.';
              }
              this.setName(value);
              return true;
            },
          },
          {
            id: '3',
            message: ({ previousValue }) => {
              return `Hola ${previousValue}! Mucho gusto. ¿En qué puedo ayudarte?`;
            },
            trigger: '4',
          },
          {
            id: '4',
            options: [
              { value: 'preguntas_frecuentes', label: 'Preguntas Frecuentes', trigger: 'preguntas_frecuentes' },
              { value: 'pago_de_facturas', label: 'Pago de Facturas', trigger: 'pago_de_facturas' },
              { value: 'contactanos', label: 'Contáctanos', trigger: 'contactanos' },
              { value: 'aplicar_a_vacante', label: 'Aplicar a una vacante', trigger: 'aplicar_a_vacante' },
            ],
          },
          {
            id: 'aplicar_a_vacante',
            message: 'Para aplicar a una vacante disponible, haz clic en el siguiente botón:',
            trigger: 'aplicar_a_vacante_url',
          },
          {
            id: 'aplicar_a_vacante_url',
            component: (
              <div
                style={{
                  backgroundColor: '#eb3237',
                  borderRadius: '10px',
                  padding: '10px',
                  textAlign: 'center',
                  margin: '10px',
                }}
              >
                <a
                  href={aplicarVacanteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Aplicar
                </a>
              </div>
            ),
            end: true,
          },          
          {
            id: 'preguntas_frecuentes',
            message: 'Para más información sobre preguntas frecuentes, visita:',
            trigger: 'preguntas_frecuentes_url',
          },
          {
            id: 'preguntas_frecuentes_url',
            component: (
              <div
                style={{
                  backgroundColor: '#eb3237',
                  borderRadius: '10px',
                  padding: '10px',
                  textAlign: 'center',
                  margin: '10px',
                }}
              >
                <Link
                  to="/preguntasFre"
                  className="active"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Preguntas frecuentes
                </Link>
              </div>
            ),
            end: true,
          },
          {
            id: 'contactanos',
            message: '¿Cómo prefieres comunicarte con nosotros?',
            trigger: 'contactanos_options',
          },
          {
            id: 'contactanos_options',
            options: [
              { value: 'whatsapp', label: 'WhatsApp', trigger: 'whatsapp_options' },
              { value: 'mas_informacion', label: 'Más Información', trigger: 'mas_informacion_options' },
            ],
          },
          {
            id: 'whatsapp_options',
            message: 'Para comunicarte con uno de nuestros asesores, dirígete al siguiente link:',
            trigger: 'whatsapp_url',
          },
          {
            id: 'whatsapp_url',
            component: (
              <div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn.icon-icons.com/icons2/3685/PNG/512/whatsapp_logo_icon_229310.png"
                    alt="whatsapp"
                    style={{ width: '50px', height: '50px' }}  
                  />
                </a>
              </div>
            ),
            end: true,
          },
          {
            id: 'mas_informacion_options',
            message: 'Para más formas de contactarnos, dirígete a:',
            trigger: 'mas_informacion_url',
          },
          {
            id: 'mas_informacion_url',
            component: (
              <div
                style={{
                  backgroundColor: '#eb3237',
                  borderRadius: '10px',
                  padding: '10px',
                  textAlign: 'center',
                  margin: '10px',
                }}
              >
                <Link
                  to="/ContactUs"
                  className="active"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Más información
                </Link>
              </div>
            ),
            end: true,
          },          
          {
            id: 'pago_de_facturas',
            message: 'Para hacer pagos de factura, puedes darle al botón de la parte izquierda de PSE o dirigirte al siguiente link:',
            trigger: 'pago_de_facturas_url',
          },
          {
            id: 'pago_de_facturas_url',
            component: (
              <div>
                <a href={pagoDeFacturasUrl} target="_blank" rel="noopener noreferrer">
                  <img src="https://seeklogo.com/images/P/pse-logo-B00717880A-seeklogo.com.png" 
                  alt="PSE" 
                  style={{ width: '60px', height: '60px' }}
                  />
                </a>
              </div>
            ),
            end: true,
          },
        ]}
      />
      </ThemeProvider>
    );
  }
}

export default ChatComponent;
