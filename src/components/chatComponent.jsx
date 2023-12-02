import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import '../styles/chatStyle.css';

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
    const preguntasFrecuentesUrl = 'https://www.google.com/?hl=es'; // Reemplaza con la URL correcta
    const trabajaConNosotrosUrl = 'https://www.ejemplo.com/trabaja-con-nosotros'; // Reemplaza con la URL correcta
    const whatsappUrl = 'https://www.ejemplo.com/whatsapp'; // Reemplaza con la URL correcta
    const masInformacionUrl = 'https://www.ejemplo.com/mas-informacion'; // Reemplaza con la URL correcta
    const pagoDeFacturasUrl = 'https://www.ejemplo.com/pago-de-facturas'; // Reemplaza con la URL correcta

    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hola, soy un chatbot. ¿Cuál es tu nombre?',
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
              { value: 'trabaja_con_nosotros', label: 'Trabaja con Nosotros', trigger: 'trabaja_con_nosotros' },
              { value: 'pago_de_facturas', label: 'Pago de Facturas', trigger: 'pago_de_facturas' },
              { value: 'contactanos', label: 'Contáctanos', trigger: 'contactanos' },
            ],
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
                  backgroundColor: 'purple', // Color de fondo morado
                  borderRadius: '10px',     // Bordes circulares
                  padding: '10px',           // Relleno interno
                  textAlign: 'center',       // Texto centrado
                  margin: '10px',            // Margen exterior
                }}
              >
                <a
                  href={preguntasFrecuentesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white', // Color de texto blanco
                    textDecoration: 'none', // Sin subrayado
                  }}
                >
                  Preguntas frecuentes
                </a>
              </div>
            ),
            end: true,
          },
          
          {
            id: 'trabaja_con_nosotros',
            message: 'Para más información sobre trabajar con nosotros, dirígete a:',
            trigger: 'trabaja_con_nosotros_url',
          },
          {
            id: 'trabaja_con_nosotros_url',
            component: (
              <div>
                <a href={trabajaConNosotrosUrl} target="_blank" rel="noopener noreferrer">
                  {trabajaConNosotrosUrl}
                </a>
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
                  {whatsappUrl}
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
              <div>
                <a href={masInformacionUrl} target="_blank" rel="noopener noreferrer">
                  {masInformacionUrl}
                </a>
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
                  {pagoDeFacturasUrl}
                </a>
              </div>
            ),
            end: true,
          },
        ]}
      />
    );
  }
}

export default ChatComponent;
