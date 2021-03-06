import React, { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

//Components
import NavBar from './NavBar.js';
import Landing from './Landing/Landing.js';
import News from './News.js';

//Misc.
//import {  } from './methods.js';

const App = () => {
    const [ overlay, setOverlay ] = useState({ component: null, active: false });

    const toggleOverlay = (newComponent) => {
        setOverlay(
            overlay.component === newComponent ? { component: overlay.component, active: !overlay.active } 
            : { component: newComponent, active: true }
        )
    };

    return (
        <div id = 'container' className = 'z0 noto pt14'>
            <main className = ' frosted bgAlpha30B grow1 columnNW height100vh' >
                <NavBar overlay = { overlay } toggleOverlay = { toggleOverlay } />
                <Route exact path = '/' render = { () => (<Landing />) } />
                <Route path = '/news' render = { () => (<News />) } />
            </main>
        </div>
    )
}

export default App;