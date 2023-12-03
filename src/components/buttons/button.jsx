import React from 'react'
import './button.css'

export default function Button({ text, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled} className='reusable-btn'>
          {text}
        </button>
      );
}
