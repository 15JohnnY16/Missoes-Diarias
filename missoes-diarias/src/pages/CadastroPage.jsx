import React, { useState, useContext } from 'react';
import { MissaoContext } from '../context/MissaoContext';

const CadastroPage = () => {
  const { adicionarMissao } = useContext(MissaoContext);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) {
      setErro('Título é obrigatório.');
      return;
    }
    adicionarMissao({ titulo, descricao });
    setTitulo('');
    setDescricao('');
    setErro('');
  };

  return (
    <div className="container">
        <div className="form-wrapper">
        <h2>Cadastrar Nova Missão</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título da missão"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <textarea
                placeholder="Descrição (opcional)"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
                <button type="submit">Adicionar</button>
            </form>
        </div>
    </div>
  );
};

export default CadastroPage;