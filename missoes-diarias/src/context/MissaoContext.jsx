import React, { createContext, useState } from 'react';

export const MissaoContext = createContext();

export const MissaoProvider = ({ children }) => {
  const [missoes, setMissoes] = useState([]);

  const adicionarMissao = (missao) => {
    setMissoes((prev) => [...prev, { ...missao, id: Date.now(), status: 'pendente' }]);
  };

  const atualizarStatus = (id, novoStatus) => {
    setMissoes((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: novoStatus } : m))
    );
  };

  return (
    <MissaoContext.Provider value={{ missoes, adicionarMissao, atualizarStatus }}>
      {children}
    </MissaoContext.Provider>
  );
};
