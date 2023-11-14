import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Carta from './Carta/Carta';
import Eventos from './Eventos/Eventos';
import Reservas from './Reservas/Reservas';
import Contactanos from './Contactanos/Contactanos';
import { Menu } from './Menu/Menu';

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </>
  );
};

export default App;
