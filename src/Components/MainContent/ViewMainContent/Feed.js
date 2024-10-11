import Post from './Post.js';

import johcodeUser from '../../../Assets/Images/Main/user-johcode.jpg';
import johcodePost from '../../../Assets/Images/Main/post-johcode.jpg';

export default function Feed() {
    return (
        <div className='Feed'>
            <Post userPhoto={johcodeUser} user='johcode.__' photo={johcodePost} text='We were a shortcut' comments='joanne: Meu deus que legal' />
            <Post userPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvE94agjuhDTqMTENobimkk9xkWI76H20Pg&s' user='savoryjump' photo='https://pbs.twimg.com/media/GRQSUeJWkAEEZr_?format=jpg&name=large' text='We were a shortcut' comments='' />
            <Post userPhoto="https://pbs.twimg.com/profile_images/1148295233727270913/vM-65pZl_400x400.jpg" user='picolo' photo='https://i.pinimg.com/originals/fe/f0/f0/fef0f08fc8d2f20e29b24275322b11ea.jpg' text='just relaxing' comments='' />
            <Post userPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqOp8vNe2foq7PmOG4CzleZFXyFnnNt3FYA&s" user='alefvernonart' photo='https://pm1.aminoapps.com/6655/d3687c16ab786609d07c658c68efe0a7e42334c1_hq.jpg' text='Cry Baby' comments='guy_41: cool art' />
            
        </div>
    );
}