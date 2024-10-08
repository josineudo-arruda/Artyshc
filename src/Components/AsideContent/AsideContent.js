import ListItem from 'ListItem.js'

import logo from '../../Assets/Images/Main/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { BsChatLeftFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

export default function AsideContent() {
    return (
        <div className='AsideContent'>
            <div className='Logo'>
                <img src={logo}></img>
            </div>

            <div>
                <ul className='Items'>
                <   li><ListItem text='Home' icon={<MdHomeFilled />} href='#' /></li>
                    <li><ListItem text='Pesquisar' icon={<FaSearch />} href='#' /></li>
                    <li><ListItem text='Explorar' icon={<FaCompass />} href='#' /></li>
                    <li><ListItem text='Mensagens' icon={<BsChatLeftFill />} href='#' /></li>
                    <li><ListItem text='Curtidos' icon={<FaRegHeart />} href='#' /></li>
                    <li><ListItem text='Perfil' icon={<TiUser />} href='#' /></li>
                    <li><ListItem text='Configurações' icon={<FaGear />} href='#' /></li>
                </ul>
            </div>

            <div className='Menu'>
             <li><ListItem text='Menu' icon={<IoMdMenu />} href='#' /></li>
            </div>
        </div>
    );
}