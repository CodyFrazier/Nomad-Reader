import React from 'react';
import { Route, Link } from 'react-router-dom';
import RandomBooks from './RandomBooks.js';
import RecentReads from './RecentReads.js';
import PopularBooks from './PopularBooks.js';
import FaveGenre from './FaveGenre.js';

const Landing = () => {
    const infoBox = 'bgAlpha80B colorC frosted padHalf border10 marginHalf'
    return (
        <div className = 'scrollDown'>
            <div className = { infoBox }>
                <h3 className = 'stripped'>Site News</h3>
                <div className = 'indent1'>This is where site news will be displayed. Look at how other sites display
                    their news to get a feel for how best to do this and decide how much info you want to show.
                </div>
                <Link to = '/news' className = 'rowNW justifyEnd padQuarter'>Read More...</Link>
            </div>
            <div className = { infoBox }>
                <div>A box with popular stories</div>
                <PopularBooks />
            </div>
            <div className = { infoBox }>
                <div>If logged in, a box with random selection from a commonly read genre</div>
                <RandomBooks />
            </div>
            <div className = { infoBox }>
                <div>A tab with last 10-15 read stories (with an x tab if they want to remove it)</div>
                < RecentReads />
            </div>
            <div className = { infoBox }>
                <div>ランデイングーページ</div>
                <FaveGenre />
            </div>
            <div className = { infoBox }>初見るページ</div>
            <div className = { infoBox }>月火水木金土日　これは漢字を試すため。ちゃんといっぱいの漢字書かないとね。ああ～難しい。漢字の知恵がほとんど無いね。覚えて無いは！</div>
        </div>
    )
};

export default Landing;