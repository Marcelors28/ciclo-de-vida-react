import React, { useState } from 'react';
import '../styles/ToggleText.css';

const ToggleText = () => {
  // Estado para gerenciar a visibilidade do texto
  const [isVisible, setIsVisible] = useState(false);

  // Função para alternar o estado de visibilidade do texto
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleVisibility} style={buttonStyle}>
        {isVisible ? 'Esconder' : 'Exibir'} Texto
      </button>
      {isVisible && <p style={textStyle}>Este é o texto que pode ser exibido ou escondido.</p>}
    </div>
  );
};

// Estilo básico para o botão 
const buttonStyle = { 
    padding: '10px 20px', 
    margin: '10px', 
    fontSize: '16px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer', 
    backgroundColor: '#4CAF50', 
    color: 'white', 
    transition: 'background-color 0.3s ease' }; 
    
buttonStyle[':hover'] = { 
    backgroundColor: '#45a049' }; 

// Estilo básico para o texto 
const textStyle = { 
    marginTop: '20px', 
    fontSize: '18px'
}

export default ToggleText;
