import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Alert from 'antd/lib/alert';

import Tweet from '../Tweet';
import TweetLoader from '../TweetLoader';
import { getTweets } from '../../store/selectors/tweets';

import './TweetList.scss';

function TweetList() {
    const { loading, data, error } = useSelector(getTweets, shallowEqual);

    if (loading) {
        return (
            <div className="tweet-list">
                {[...Array(25)].map((_, id) => (
                    <TweetLoader key={id} />
                ))}
            </div>
        );
    }

    if (error) {
        return <Alert message={error.name} description={error.message} type="error" showIcon />;
    }

    return (
        <div className="tweet-list">
            {data.map((tweet) => (
                <Tweet key={tweet._id} {...tweet} />
            ))}
        </div>
    );
}

export default TweetList;
