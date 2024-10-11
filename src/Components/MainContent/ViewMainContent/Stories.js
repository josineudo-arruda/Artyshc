import Story from './Story.js';

import johcodeUser from '../../../Assets/Images/Main/user-johcode.jpg';

export default function Stories() {
    return (
        <div className='Stories'>
            <Story user='johcode.__' photo={johcodeUser} />
            <Story user='picolo' photo='https://pbs.twimg.com/profile_images/1148295233727270913/vM-65pZl_400x400.jpg' /> 
            <Story user='alefternonart' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqOp8vNe2foq7PmOG4CzleZFXyFnnNt3FYA&s' />
            <Story user='savoryjump' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvE94agjuhDTqMTENobimkk9xkWI76H20Pg&s' />
            <Story user='livingco' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9a_6bWVwi59-EJc2SBxw8jpLFdwqMKRdq0Q&s' />
            <Story user='yaru' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d1UTLRT4bjq3odlpSJpGdmUsWrRpdB6U6Q&s' />
        </div>
    );
}