//Notes
/*
    Bookmark and Favorite should not actually activate an overlay. They should simply do:
        Bookmark: Add the page and the media to the list of bookmarks -- Should be loadable
        Favorite: Should add the story to the list of favorited stories
        Hamburger Button? 
*/

import React from 'react';

const NavBar = ({ overlay, toggleOverlay }) => {

    return (
        <nav id = 'NavBar' className = 'rowNW bgAlpha50AO padQuarter'>
            <img id = 'logo' className = 'width100px' src = 'assets/img/Icons/Logo.png' />
            <div id = 'iconBar' className = 'widthundred rowNW justifySA alignCenter'>
                <img id = 'bookmark' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Bookmark' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Bookmark.png' onClick = { () => { toggleOverlay('Bookmark') } }/>
                <img id = 'favorite' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Favorite' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Heart.png' onClick = { () => { toggleOverlay('Favorite') } }/>
                <img id = 'settings' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Settings' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Settings.png' onClick = { () => { toggleOverlay('Settings') } }/>
                <img id = 'search' className = { `width30px height30px box5px padQuarter ${ overlay.component === 'Search' && overlay.active ? 'selectedNavItem' : '' }` } src = 'assets/img/Icons/Search.png' onClick = { () => { toggleOverlay('Search') } }/>
            </div>
        </nav>
    )
}

export default NavBar;