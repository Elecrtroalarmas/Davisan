import React, { Component } from 'react';
import ChatComponent from './chatComponent';
import '../styles/floatingButtonStyle.css';


class FloatingButton extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isChatVisible: false,
      };
    }
  
    toggleChat = () => {
      this.setState((prevState) => ({
        isChatVisible: !prevState.isChatVisible,
      }));
    };
  
    render() {
      return (
        <div className="floating-button-container">
          {this.state.isChatVisible && <ChatComponent />}
  
          <button onClick={this.toggleChat} className="floating-button">
            {this.state.isChatVisible ? '' : ' '}
          </button>
        </div>
      );
    }
  }
  
  export default FloatingButton;
  