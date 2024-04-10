function Evento() {
    
    function MeuEvento() {
        alert(`Você Clicou! `)
    }
    
    return (
        <div>
            <p>Este botão irá disparar um evento em jfodas</p>
            <button onClick={MeuEvento}>CLIQUE AQUI!!!</button>
            <Button event={meuEvento}/>
        </div>
    )
}

export default Evento