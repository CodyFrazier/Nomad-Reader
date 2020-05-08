import React from 'react';
import SettingsOverlay from './SettingsOverlay.js';
import SearchOverlay from './SearchOverlay.js';

const Overlay = ({ toggleOverlay, overlay }) => {
    return (
        <div id = 'overlay' className = 'bgAlpha60B heighthundred'>
            <div className = 'rowNW justifyEnd'>
                <input type = 'button' onClick = { () => toggleOverlay(overlay.component) } value = 'Close' className = 'bgAlpha30B colorAO borderAO topRight5 topLeft5 padQuarter topMarginHalf rightMargin1' />
            </div>
            <div id = 'overlayContainer' className = 'frosted height60vh height rightMargin1 leftMargin1 topLeft5 bottomLeft5 bottomRight5 pad1 bgAlpha50W borderAO'>
                { overlay.component === 'Search' && <SearchOverlay /> }
                { overlay.component === 'Settings' && <SettingsOverlay /> }
            </div>
        </div>
    )
}

export default Overlay;