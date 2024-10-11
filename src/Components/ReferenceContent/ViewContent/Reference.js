export default function Reference(props) {
    return (
        <div className="Reference">
            <div>
                <img src={props.photo} alt="Foto do Usuário" />
                <span>{props.user}</span>
            </div>
            <div>
                <button>Follow</button>
            </div>
        </div>
    );
}