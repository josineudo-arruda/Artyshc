import { CiMenuKebab } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa6";

export default function Post(props) {
    return (
        <div className="Post">
            <div className="InfoTop">
                <div>
                    <img src={props.userPhoto} alt="Foto do Usuário"></img>
                    <span>{props.user}</span>
                </div>
                <div>
                    <span><CiMenuKebab /></span>
                </div>
            </div>

            <img className="PhotoPost" src={props.photo} alt="Foto do Post"></img>

            <div className="InfoBottom">
                <div className="Actions">
                    <div>
                        <span><FaRegHeart /></span>
                        <span><FaRegComments /></span>
                        <span><FiSend /></span>
                    </div>

                    <div>
                        <span><MdAutoAwesomeMosaic /></span>
                    </div>
                </div>

                <p className="TextPost"><b>{props.user}</b> {props.text}</p>
                <p className="CommentsPost">{props.comments}</p>
            </div>
        </div>
    );
}