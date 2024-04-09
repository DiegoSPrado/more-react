function Form() {
    
    function Cadastro(e) {
       e.preventDefault()
        prompt('Você confirma o seu cadastro?') 
    }
    
    return (
        <div>
            <form onSubmit={Cadastro}>
                <div><input type="text" placeholder="Digite seu nome aqui."></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form