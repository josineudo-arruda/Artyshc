export default function ListItem(props) { 
    return (
        <a  href={props.href} target="_blank" rel="noopener noreferrer">
            <span>
                {props.icon}
            </span> 
            <bold>
                {props.text}
            </bold>
        </a>
    )
}