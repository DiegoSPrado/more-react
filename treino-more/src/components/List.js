import Item from "./Item"



function List () {
    return (
        <>
        <h1>Lista de Músicas</h1>
        <ul>
            <Item album="When We all fall asleep, Where do we go?" ano_lançamento={2019}/>
            <Item album='Ye'  ano_lançamento={2018}/>
            <Item album="MBTDF" ano_lançamento={2013}/>
            <Item album="Igor" ano_lançamento={2019}/>
            <Item/>
        </ul>
        </>
    )
}

export default List