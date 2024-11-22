import React, { useState, useEffect } from 'react';
import '../styles/WindowSize.css';

const WindowSize = () => {
  // Estado para armazenar a largura atual da janela
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Função para atualizar a largura da janela
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // useEffect para adicionar e remover o event listener de redimensionamento
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup para remover o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Largura da janela: {windowWidth}px</h1>
    </div>
  );
};

export default WindowSize;
