function Pessoa(props) {
    return (
        <div>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade} </p>
            <p>Profissão: {props.prof}</p>
            <p><img src={props.foto} alt={props.nome}/></p>
        </div>
    )
}

export default Pessoa