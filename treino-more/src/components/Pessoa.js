function Pessoa({nome, idade, prof, foto}) {
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade} </p>
            <p>Profissão: {prof}</p>
            <p><img src={foto} alt={nome}/></p>
        </div>
    )
}

export default Pessoa