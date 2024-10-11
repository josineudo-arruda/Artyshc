import Post from './Post.js';

export default function Feed() {
    return (
        <div className='Feed'>
            <Post userPhoto='https://www.shutterstock.com/image-photo/pohots-sunset-kelve-beach-maharashtra-260nw-1772105372.jpg' user='shushu' photo='https://www.shutterstock.com/image-photo/pohots-sunset-kelve-beach-maharashtra-260nw-1772105372.jpg' text='olá mundo' comments='joanne: Meu deus que legal' />
            <Post userPhoto='https://www.shutterstock.com/image-photo/pohots-sunset-kelve-beach-maharashtra-260nw-1772105372.jpg' user='shushu' photo='https://www.shutterstock.com/image-photo/pohots-sunset-kelve-beach-maharashtra-260nw-1772105372.jpg' text='olá mundo' comments='joanne: Meu deus que legal' />
        </div>
    );
}