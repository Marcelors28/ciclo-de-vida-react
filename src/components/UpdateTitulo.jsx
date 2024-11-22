import React, { useState, useEffect } from 'react';
import '../styles/UpdateTitulo.css';

const TitleUpdater = () => {
  // Variável de estado para armazenar o número
  const [number, setNumber] = useState(0);

  // useEffect para atualizar o título da aba do navegador toda vez que 'number' mudar
  useEffect(() => {
    document.title = `Número atual: ${number}`;
  }, [number]);

  // Funções para incrementar e decrementar o número
  const increment = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decrement = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Número atual: {number}</h1>
      <button onClick={increment} style={buttonStyle}>Incrementar</button>
      <button onClick={decrement} style={buttonStyle}>Decrementar</button>
    </div>
  );
};

// Estilo básico para os botões
const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: 'white',
  transition: 'background-color 0.3s ease'
};

buttonStyle[':hover'] = {
  backgroundColor: '#45a049'
};

export default TitleUpdater;
