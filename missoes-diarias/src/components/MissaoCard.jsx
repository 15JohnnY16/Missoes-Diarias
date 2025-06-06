import React, { useContext } from 'react';
import { MissaoContext } from '../context/MissaoContext';

const MissaoCard = ({ missao }) => {
  const { atualizarStatus } = useContext(MissaoContext);

  const isFinalizada = missao.status !== 'pendente';

  const statusClass = {
    sucesso: 'status-sucesso',
    falha: 'status-falha',
    pendente: 'status-pendente',
  };

  return (
    <div className="missao-card">
      <h3><strong>{missao.titulo}</strong></h3>
      <p>
        <span className={`status ${statusClass[missao.status]}`}>
          {missao.status}
        </span>
      </p>

      {!isFinalizada && (
        <div className="botoes">
          <button
            className="botao-status sucesso"
            onClick={() => atualizarStatus(missao.id, 'sucesso')}
          >
            ✅ Sucesso
          </button>
          <button
            className="botao-status falha"
            onClick={() => atualizarStatus(missao.id, 'falha')}
          >
            ❌ Falha
          </button>
        </div>
      )}
    </div>
  );
};

export default MissaoCard;