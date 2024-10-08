import Stories from "../../Components/MainContent/ViewMainContent/Stories.js";
import Feed from '../../Components/MainContent/ViewMainContent/Feed.js';

export default function MainContent() {
    return (
        <div className="MainContent">
            <Stories />
            <Feed />
        </div>
    );
}