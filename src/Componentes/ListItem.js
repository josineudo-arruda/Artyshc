

export default function ListItem(props) { 
    return (
        <li>
            <span>
                {props.icon}
            </span> 
            <bold>
                {props.text}
            </bold>
        </li> 
    )
}