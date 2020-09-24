import React from 'react';

import TweetBox from '../TweetBox';
import TweetList from '../TweetList';

import './Feed.scss';

function Feed() {
    return (
        <div className="feed">
            <div className="feed-heading">
                <div className="feed-heading__inner">
                    <h2 className="feed__title">Главная</h2>
                </div>
            </div>

            <TweetBox />

            <div style={{ height: '10px', backgroundColor: 'rgb(230, 236, 240)' }}></div>

            <TweetList />
        </div>
    );
}

export default Feed;
