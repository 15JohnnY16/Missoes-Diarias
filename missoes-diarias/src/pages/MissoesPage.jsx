import React, { useContext } from 'react';
import { MissaoContext } from '../context/MissaoContext';
import MissaoCard from '../components/MissaoCard';

const MissoesPage = () => {
  const { missoes } = useContext(MissaoContext);

  const pendentes = missoes.filter((m) => m.status === 'pendente');
  const concluidas = missoes.filter((m) => m.status !== 'pendente');

  return (
    <div className="missoes-container">
      <h2>Minhas Missões</h2>

      {pendentes.length > 0 && (
        <>
          <h3>🕒 Pendentes</h3>
          {pendentes.map((m) => (
            <MissaoCard key={m.id} missao={m} />
          ))}
        </>
      )}

      {concluidas.length > 0 && (
        <>
          <h3>✅ Concluídas</h3>
          {concluidas.map((m) => (
            <MissaoCard key={m.id} missao={m} />
          ))}
        </>
      )}

      {missoes.length === 0 && <p>Nenhuma missão cadastrada ainda.</p>}
    </div>
  );
};

export default MissoesPage;