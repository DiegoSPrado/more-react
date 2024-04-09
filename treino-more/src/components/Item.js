import PropTypes from 'prop-types'


function Item ({album, ano_lançamento}) {
    return (
        <>
        <li>{album} - {ano_lançamento}</li>
        </>
    )
}

Item.propTypes = {
    album: PropTypes.string.isRequired, /* FAz com que o valor da props seja o que colocamos lá, por exemplo, string e que seja obrigatório */
    ano_lançamento: PropTypes.number,
}

Item.defaultProps = {
    album: "Faltou o álbum",
    ano_lançamento: 0,

    /* Essa propriedade faz com q o componente que esteja com esses valores props, se não forem declarados os seus valores, irá ser colocado esses valores por padrão */
}

export default Item