const listaDeItens = [
    { id: 1, nome: 'Maçã' },
    { id: 2, nome: 'Laranja' },
    { id: 3, nome: 'Banana' },
    { id: 4, nome: 'Morango' }
];

 function ListaDeFrutas() {
    return (
        <ul>
            {listaDeItens.map(item => (
                <li key={index.id}>{item.nome}</li>
            ))}
        </ul>
    );
 }
 export default ListaDeFrutas