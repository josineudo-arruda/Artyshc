
export default function Story(props) {
    return (
        <div className="Story">
            <div><img src={props.photo} alt='Foto de Story'></img></div>
            <span>{props.user}</span>
        </div>
    );
}