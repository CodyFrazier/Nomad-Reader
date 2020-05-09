import React from 'react';

const SearchOverlay = () => {
    return (
        <div className = 'z1'>
            <div className = 'rowNW'>
                <input placeholder = 'Search for...' className = 'pt18 borderAO rightPad1 width60vw leftPad1 bg2 colorAO border25' />
                <img className = 'leftMarginQuarter width15px padQuarter circle25px bgAO' src = 'assets/img/Icons/search.png' />
            </div>
            <p>Replace with Tag Filtering (toggled on with button)</p>
            <p>Replace with Recent Stories</p>
            <p>Replace with List of stories that fit search discription</p>
        </div>
    )
};

export default SearchOverlay;