import Stories from '../MainContent/ViewMainContent/Stories.js';
import Feed from '../MainContent/ViewMainContent/Feed.js';

import './Css/Feed.css'

export default function MainContent() {
    return (
        <div className="MainContent">
            <Stories />
            <Feed />
        </div>
    );
}