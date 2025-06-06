import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ temaEscuro, setTemaEscuro }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/">Cadastrar Missão</Link>
        <Link to="/missoes">Minhas Missões</Link>
      </div>
      <button
        onClick={() => setTemaEscuro(!temaEscuro)}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        {temaEscuro ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
      </button>
    </nav>
  );
};

export default Header;