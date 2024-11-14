import React, { useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState('');

  const handleClick = () => {
    setMensagem('Cadastrado');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Salvar
      </button>
      {mensagem && <p style={{ marginTop: '20px', fontSize: '18px' }}>{mensagem}</p>}
    </div>
  );
}

export default App;