import { useState } from 'react'

function Form() {
    
    function Cadastro(e) {
       e.preventDefault()
        console.log(`Cadastro Finalizado com o nome ${name} e a senha: ${password}`) 
    }
    
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={Cadastro}>
                <div><label htmlFor="name">Nome: <input type="text" placeholder="Digite seu nome aqui."
                id="name"
                name="name" required="on"
                onChange={(e) => setName(e.target.value)}></input>
                </label>
                </div>
                <div>
                    <label htmlFor="password">Senha: <input type="password" placeholder="Digite a sua senha."
                    id="password"
                    name="password" required="on"
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form