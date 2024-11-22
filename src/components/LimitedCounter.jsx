import React, { useState } from 'react';
import '../styles/LimitedCounter.css';

const LimitedCounter = () => {
  // Estado para armazenar o valor do contador e a mensagem de limite
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  // Função para incrementar o contador
  const increment = () => {
    setCounter((prevCounter) => {
      if (prevCounter < 10) {
        setMessage(''); // Limpa a mensagem de limite
        return prevCounter + 1;
      } else {
        setMessage('Limite atingido!');
        return prevCounter;
      }
    });
  };

  // Função para decrementar o contador
  const decrement = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        setMessage(''); // Limpa a mensagem de limite
        return prevCounter - 1;
      } else {
        return prevCounter;
      }
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {counter}</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}
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

export default LimitedCounter;
