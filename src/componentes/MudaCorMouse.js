import React, { useState } from 'react';

function App() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: hover ? '#4CAF50' : '#008CBA', // Verde ao passar o mouse, azul normalmente
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Passe o mouse para a mágica acontecer!
      </button>
    </div>
  );
}

export default App;