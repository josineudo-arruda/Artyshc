import MainContent from './MainContent/MainContent.js'
import AsideContent from './AsideContent/AsideContent.js'
import ReferenceContent from './ReferenceContent/ReferenceContent.js'

import './App.css'

export default function App() {
    return (
        <div className='App'>
            <AsideContent />
            <div className='AppSide'>
            <MainContent />
            <ReferenceContent />
            </div>
        </div>
    );
}
