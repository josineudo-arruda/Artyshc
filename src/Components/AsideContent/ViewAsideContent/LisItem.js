import '../Css/ListItem.js'

export default function ListItem(props) {
    return (
        <a href={props.href}>
            <span>{props.icon}</span>
            <bold>{props.text}</bold>
        </a>
    );
}