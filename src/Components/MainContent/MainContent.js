import Stories from './ViewMainContent/Stories.js';
import Feed from './ViewMainContent/Feed.js';

import './Css/Feed.css'

export default function MainContent() {
    return (
        <div className="MainContent">
            <Stories />
            <Feed />
        </div>
    );
}