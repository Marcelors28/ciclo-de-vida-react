import React, { useState, useEffect } from 'react';
import '../styles/RealTimeClock.css';

const RealTimeClock = () => {
  // Estado para armazenar a hora atual
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect para configurar um intervalo que atualiza a hora a cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{currentTime.toLocaleTimeString()}</h1>
    </div>
  );
};

export default RealTimeClock;
