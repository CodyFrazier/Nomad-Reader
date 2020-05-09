import React from 'react';

const Landing = () => {
    const infoBox = 'bgAlpha80B colorC frosted borderW padHalf border10 marginHalf'
    return (
        <div className = ''>
            <div className = { infoBox }>
                <h3 className = 'stripped'>Site News</h3>
                <div className = 'indent1'>This is where site news will be displayed. Look at how other sites display
                    their news to get a feel for how best to do this and decide how much info you want to show.
                </div>
            </div>
            <p className = { infoBox }>A box with popular stories</p>
            <p className = { infoBox }>If logged in, a box with random selection from a commonly read genre</p>
            <p className = { infoBox }>A tab with last 10-15 read stories (with an x tab if they want to remove it)</p>
            <p className = { infoBox }>ランデイングーページ</p>
            <p className = { infoBox }>初見るページ</p>
            <p className = { infoBox }>月火水木金土日　これは漢字を試すため。ちゃんといっぱいの漢字書かないとね。ああ～難しい。漢字の知恵がほとんど無いね。覚えて無いは！</p>
        </div>
    )
};

export default Landing;