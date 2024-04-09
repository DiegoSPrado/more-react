function Evento({numero}) {
    
    function MeuEvento() {
        alert(`Você Clicou! ${numero}`)
    }
    
    return (
        <div>
            <p>Este botão irá disparar um evento em jfodas</p>
            <button onClick={MeuEvento}>CLIQUE AQUI!!!</button>
        </div>
    )
}

export default Evento