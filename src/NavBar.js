//Notes
/*
    Bookmark and Favorite should not actually activate an overlay. They should simply do:
        Bookmark: Add the page and the media to the list of bookmarks -- Should be loadable
        Favorite: Should add the story to the list of favorited stories
        Hamburger Button? 
*/

import React from 'react';

//Components
import SettingsOverlay from './SettingsOverlay.js';
import SearchOverlay from './SearchOverlay.js';

const NavBar = ({ overlay, toggleOverlay }) => {

    return (
        <div>
            <nav id = 'NavBar' className = 'rowNW bgAlpha50AO'>
                <img id = 'logo' className = 'width100px padQuarter' src = 'assets/img/Icons/Logo.png' />
                <div id = 'iconBar' className = 'widthundred rowNW justifySA alignCenter padQuarter'>
                    <img id = 'bookmark' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Bookmark' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Bookmark.png' onClick = { () => { toggleOverlay('Bookmark') } }/>
                    <img id = 'favorite' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Favorite' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Heart.png' onClick = { () => { toggleOverlay('Favorite') } }/>
                    <img id = 'settings' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Settings' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Settings.png' onClick = { () => { toggleOverlay('Settings') } }/>
                    <img id = 'search' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Search' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Search.png' onClick = { () => { toggleOverlay('Search') } }/>
                </div>
                
            </nav>
            { overlay.active && <div id = 'overlay' className = 'columnNW bgAlpha60B frosted heighthundred widthundred z1'>
                <div className = 'rowNW justifyEnd'>
                    <input type = 'button' onClick = { () => toggleOverlay(overlay.component) } value = 'Close' className = 'bgAlpha30B colorAO borderAO topRight5 topLeft5 padQuarter topMarginHalf rightMargin1' />
                </div>
                <div id = 'overlayContainer' className = 'frosted height60vh height rightMargin1 leftMargin1 topLeft5 bottomLeft5 bottomRight5 pad1 bgAlpha50W borderAO'>
                    { overlay.component === 'Search' && <SearchOverlay /> }
                    { overlay.component === 'Settings' && <SettingsOverlay /> }
                </div>
            </div> }    
        </div>
        
    )
}

export default NavBar;