import { CiMenuKebab } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";

export default function Post(props) {
    return (
        <div className="Post">
            <div className="InfoTop">
                <div>
                    <img src={props.userPhoto} alt="Foto do Usuário"></img>
                    <b>{props.user}</b>
                </div>
                <div>
                    <span><CiMenuKebab /></span>
                </div>
            </div>

            <img className="PhotoPost" src={props.photo} alt="Foto do Post"></img>

            <div className="InfoBottom">
                <div className="Actions">
                    <div>
                        <span><FaHeart /></span>
                        <span><FaComments /></span>
                        <span><BsFillSendFill /></span>
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