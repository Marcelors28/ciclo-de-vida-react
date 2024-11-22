import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../src/styles/App.css'
import UpdateTitulo from './components/UpdateTitulo';
import WindowSize from './components/WindowSize';
import PersistentCounter from './components/PersistentCounter';
import RealTimeClock from './components/RealTimeClock';
import ToggleText from './components/ToggleText';
import LimitedCounter from './components/LimitedCounter';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Ciclo de vida em componentes funcionais</h1>
        <nav className="navbar">
          <ul>
            <li><Link to="/updatetitulo">Atualização de Título</Link></li>
            <li><Link to="/windowsize">Tamanho da Janela</Link></li>
            <li><Link to="/persistentCounter">Sincronização de Estado com Local Storage</Link></li>
            <li><Link to="/realtimeclock">Relógio em Tempo Real</Link></li>
            <li><Link to="/toggletext">Exibir/Mostrar Texto</Link></li>
            <li><Link to="/limitedcounter">Contador com Limite</Link></li>
         
          </ul>
        </nav>
        <Routes>
          <Route path="/updatetitulo" element={<UpdateTitulo />} />
          <Route path="/windowsize" element={<WindowSize />} />
          <Route path="/persistentCounter" element={<PersistentCounter />} />
          <Route path="/realtimeclock" element={<RealTimeClock />} />
          <Route path="/toggletext" element={<ToggleText />} />
          <Route path="/limitedcounter" element={<LimitedCounter />} />
         
        </Routes>
      </div>
    </Router>
  );
}


export default App;