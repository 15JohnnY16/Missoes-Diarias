import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CadastroPage from './pages/CadastroPage';
import MissoesPage from './pages/MissoesPage';

const App = () => {
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    document.body.className = temaEscuro ? 'dark' : 'light';
  }, [temaEscuro]);

  return (
    <>
      <Header temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />
      <Routes>
        <Route path="/" element={<CadastroPage />} />
        <Route path="/missoes" element={<MissoesPage />} />
      </Routes>
    </>
  );
};

export default App;