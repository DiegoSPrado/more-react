import styles from './Frase.module.css'



function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este frase foi feita dentro de uma componente e os componentes podem ser colocados dentro de outros componentes, não precisa necessariamente ser colocados apenas no app js ennfim é isso</p>
        </div>
    )
}

export default Frase