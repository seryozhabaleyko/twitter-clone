import React from 'react';
import { Topic as TopicProps } from '../../store/types/topics';

import './Topic.scss';

function Topic({ topic, name, tweet_value }: TopicProps) {
    return (
        <div className="topic">
            <div className="topic__inner">
                <div className="topic__topic">Актуальные темы: {topic}</div>
                <div className="topic__name">{name}</div>
                <div className="topic__tweet-value">{`Твитов: ${tweet_value.toLocaleString()}`}</div>
            </div>
        </div>
    );
}

export default Topic;
