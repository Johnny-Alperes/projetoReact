function EventoAlert () {
    const handleClick = (nome) => {
        alert(`Bem-vindo, ${nome}`);
    };

    return <button onClick={handleClick.bind(this, 'O campo cidade não foi preenchido')}>Salvar Cadastro</button>;
    
}

export default EventoAlert

