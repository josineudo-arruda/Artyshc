export default function Story(props) { 
    return (
        <div className="Story">
            <div className='ImagemUser'>
                <img src={props.foto} alt={props.nome}/>
            </div>

            <div className='NomeUser'>
                <span>{props.nome}</span>
            </div>
        </div>
    )
}