import React from 'react';

const NavBar = () => {
    return (
        <nav id = 'NavBar' className = 'rowNW bgAlpha50AO padQuarter'>
            <img id = 'logo' className = 'width100px' src = 'assets/img/Icons/Logo.png' />
            <div id = 'iconBar' className = 'widthundred rowNW justifySA alignCenter'>
                <img id = 'bookmark' className = 'width30px height30px box5px padQuarter' src = 'assets/img/Icons/Bookmark.png' />
                <img id = 'favorite' className = 'width30px height30px box5px padQuarter' src = 'assets/img/Icons/Heart.png' />
                <img id = 'settings' className = 'width30px height30px box5px padQuarter' src = 'assets/img/Icons/Settings.png' />
                <img id = 'search' className = 'width30px height30px box5px padQuarter' src = 'assets/img/Icons/Search.png' />
            </div>
        </nav>
    )
}

export default NavBar;