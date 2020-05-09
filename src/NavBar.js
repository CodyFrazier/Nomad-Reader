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

    const navImage = 'width30px height30px box5px padQuarter';

    const submitFavorite = () => {
        console.log('Eventually this will alter the database on a column that controls the favorites list');
    };

    const submitBookMark = () => {
        console.log('Eventually this will alter the database so that this user can load the story back where it was when they bookmarked it');
    };

    return (
        <div>
            <nav id = 'NavBar' className = 'rowNW bgAlpha50AO'>
                <img id = 'logo' className = 'width100px padQuarter' src = 'assets/img/Icons/Logo.png' onClick = { () => console.log('This will route to Landing When Clicked')} />
                <div id = 'iconBar' className = 'widthundred rowNW justifySA alignCenter padQuarter'>
                    <img id = 'bookmark' className = { `${ navImage }` } src = 'assets/img/Icons/Bookmark.png' onClick = { () => submitBookMark() }/>
                    <img id = 'favorite' className = { `${ navImage }` } src = 'assets/img/Icons/Heart.png' onClick = { () => submitFavorite() }/>
                    <img id = 'settings' className = { `${ navImage } ${ overlay.component === 'Settings' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Settings.png' onClick = { () => { toggleOverlay('Settings') } }/>
                    <img id = 'search' className = { `${ navImage } ${ overlay.component === 'Search' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Search.png' onClick = { () => { toggleOverlay('Search') } }/>
                </div>
                
            </nav>
            { overlay.active && <div id = 'overlay' className = 'columnNW bgAlpha60B frosted heighthundred widthundred z1'>
                <div className = 'rowNW justifyEnd'>
                    <input type = 'button' onClick = { () => toggleOverlay(overlay.component) } value = 'Close' className = 'bgAlpha30B colorAO borderAO topRight5 topLeft5 padQuarter topMarginHalf rightMargin1' />
                </div>
                <div id = 'overlayContainer' className = 'frosted height60vh height rightMargin1 leftMargin1 topLeft5 bottomLeft5 bottomRight5 pad1 bgAlpha50W'>
                    { overlay.component === 'Search' && <SearchOverlay /> }
                    { overlay.component === 'Settings' && <SettingsOverlay /> }
                </div>
            </div> }    
        </div>
        
    )
}

export default NavBar;