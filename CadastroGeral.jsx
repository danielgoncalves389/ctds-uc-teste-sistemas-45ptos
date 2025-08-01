// src/components/CadastroGeral.jsx

import React, { useState } from 'react';

const CadastroGeral = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    

    if (!nome ){
      return(
      setMensagem('Preencha o campo nome')
      );
    }

    else if(!email.includes('@')){
      return(
        setMensagem('Preencha o campo email corretamente')
        );
    }


    else if(!senha ){
      return(
        setMensagem('Preencha o campo senha')
        );
    }


    setMensagem('Cadastro realizado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');

  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            minLength={3}
            max={80}

          />
        </div>

        <div>
          <label>E-mail:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email "
            maxLength={70}

          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha "
            minLength={6}
            maxLength={85}

          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroGeral;