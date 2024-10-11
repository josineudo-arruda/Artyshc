export default function Story(props) {
    <div className="Story">
        <img src={props.photo} alt='Foto de Story'></img>
        <span>{props.user}</span>
    </div>
}