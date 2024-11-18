import React from 'react';

function ListaDeFrutas() {
  const frutas = [
    { id: 1, nome: "Maçã" },
    { id: 2, nome: "Laranja" },
    { id: 3, nome: "Banana" }
  ];

  return (
    <div>
      <h2>Lista de Frutas</h2>
      <ul>
        {frutas.map((fruta) => (
          <li key={fruta.id}>{fruta.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeFrutas;

 