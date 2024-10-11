import './Css/Reference.css';
import Reference from './ViewContent/Reference.js'

export default function ReferenceContent() {
    return (
        <div className='ReferenceContent'>
            <div>
                <h3>Recomended Accounts</h3>
                <hr></hr>
                <Reference user='sponx' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o8PBIpTqSQfd0Tuc9dKG4cRRPuREE1LrQA&s' />
                <Reference user='olivia' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWFI3dlOwgDdoTSNjDBo3Aq6RItoMPCFae5_SZHfZlsuTRdPINGfRX3QTocdBrEXP7UQ&usqp=CAU' />
                <Reference user='sandy' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIS534Vxyf8-9ezIho04v9zNVf7eInW7WqFyuIGcgWU7MSDJNGYjigF42FUJfEbHsHx8&usqp=CAU' />
                <Reference user='メルメルー' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvY4cdiTPycNq6D88M23vrgdrsG3F-V38R0IRmfQ41IRY3xFGcXeF3yutQlm-qABwo638&usqp=CAU' />
                <Reference user='karki' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_RTfZRI_Qs6A45UZJbaK-bUbU17xHAeu_I-i3NvcNt3bDbHz7FrICa-znFUtlyx2fY0&usqp=CAU' />
                <Reference user='chiyoa' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBlNS-PkSlCeV5RV88Lgh502ZXiVN5MPWQWoiJMz8RrALiKiwtFwUGV37-oVNpQZ2R5s&usqp=CAU' />

                
            </div>
            {/* <div>
                <h3>Mosaic Thread</h3>
                <hr></hr>
                <></>
            </div> */}
        </div>
    );
}