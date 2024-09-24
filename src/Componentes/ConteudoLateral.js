import '../css/ConteudoLateral.css'
import logo from '../imagens/logo.png';

function ConteudoLateral() {
    return (
        <div ClassName="ConteudoLateral">
            <div className='Logo'>
                <img src={logo} alt='logo site'></img>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Pesquisar</li>
                    <li>Descobrir</li>
                    <li>Mensagem</li>
                </ul>
            </div>
        </div>
    );
}

export default ConteudoLateral;