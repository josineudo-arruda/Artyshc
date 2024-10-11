import Stories from './ViewContent/Stories.js';
import Feed from './ViewContent/Feed.js';

import './Css/Feed.css'

export default function MainContent() {
    return (
        <div className="MainContent">
            <Stories />
            <Feed />
        </div>
    );
}