import React, { useState, useEffect } from 'react';
import '../styles/PersistentCounter.css';

const PersistentCounter = () => {
  // Inicializa o estado do contador com o valor do Local Storage, se disponível
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem('counter');
    return savedCounter !== null ? JSON.parse(savedCounter) : 0;
  });

  // Atualiza o Local Storage sempre que o contador mudar
  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  // Funções para incrementar e decrementar o contador
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador Persistente: {counter}</h1>
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

export default PersistentCounter;
