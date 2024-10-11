import ListItem from './ViewAsideContent/LisItem.js'

import logo from '../../Assets/Images/Main/logo.png'

import { FaRegHeart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import './Css/Menu.css'

export default function AsideContent() {
    return (
        <div className='AsideContent'>
            <div className='Logo'>
                <img src={logo} alt='Logo do Site'></img>
                <b>Astyshc</b>
            </div>

            <div>
                <ul className='Items'>
                <   li><ListItem text='Home' icon={<MdHomeFilled />} href='#' /></li>
                    <li><ListItem text='Explorar' icon={<FaCompass />} href='#' /></li>
                    <li><ListItem text='Mosaicos' icon={<MdAutoAwesomeMosaic />} href='#' /></li>
                    <li><ListItem text='Salvos' icon={<FaRegHeart />} href='#' /></li>
                    <li><ListItem text='Perfil' icon={<TiUser />} href='#' /></li>
                    <li><ListItem text='Configurações' icon={<FaGear />} href='#' /></li>
                </ul>
            </div>

            <div className='Menu'>
                <div><ListItem text='Menu' icon={<IoMdMenu />} href='#' /></div>
            </div>
        </div>
    );
}