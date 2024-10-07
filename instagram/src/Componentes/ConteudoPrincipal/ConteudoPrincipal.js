import '../../css/ConteudoPrincipal.css'
import Stories from  './Stories'
import Postagens from './Postagens'



function ConteudoPrincipal() {
    return (
        <div className='ConteudoPrincipal'>
            <Stories />
            <Postagens />
        </div>
    );
}

export default ConteudoPrincipal;