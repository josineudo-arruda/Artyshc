import '../css/ConteudoLateral.css'
import ListItem from '../Componentes/ListItem.js'
import logo from '../imagens/logo.png';

import { FaRegHeart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { BsChatLeftFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";

function ConteudoLateral() {
    return (
        <div ClassName="ConteudoLateral">
            <div className='Logo'>
                <img src={logo} alt='logo site'></img>
            </div>
            <div>
                <ul className='MenuLateral'>
                    <ListItem text='Home' icon={<MdHomeFilled />} />
                    <ListItem text='Pesquisar' icon={<FaSearch />} />
                    <ListItem text='Explorar' icon={<FaCompass />} />
                    <ListItem text='Mensagens' icon={<BsChatLeftFill />} />
                    <ListItem text='Curtidos' icon={<FaRegHeart />} />
                    <ListItem text='Perfil' icon={<TiUser />} />
                    <ListItem text='Configurações' icon={<FaGear />} />
                </ul>
            </div>
        </div>
    );
}

export default ConteudoLateral;