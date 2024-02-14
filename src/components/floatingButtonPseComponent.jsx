import React, { Component } from "react";
import "../styles/floatingButtonPseStyle.css";

class FloatingButtonPse extends Component {
  render() {
    return (
      <div className="floating-btns">
        <a
          href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=3967&searchedCategoryId=&searchedAgreementName=DAVISAN%20LTDA"
          target="_blank"
        >
          <button className="floating-buttonpse"></button>
        </a>
        <a
          href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=3967&searchedCategoryId=&searchedAgreementName=DAVISAN%20LTDA"
          target="_blank"
        >
          <button className="floating-buttonpse-wpp"></button>
        </a>
      </div>
    );
  }
}

export default FloatingButtonPse;
