import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { Tweet as TweetProps } from '../../state/modules/tweet/tweet.types';
import Header from './Header';
import Text from './Text';
import Photos from './Photos';
import Footer from './Footer';

import './Tweet.scss';

function Tweet({ text, author }: TweetProps) {
    return (
        <article className="tweet">
            <div className="tweet__inner">
                <div className="tweet__avatar">
                    <Avatar
                        src={author?.avatarUrl}
                        alt={author?.name}
                        style={{ height: 49, width: 49 }}
                    />
                </div>
                <div className="tweet__content">
                    <Header author={author} />
                    <Text text={text} />
                    <Photos />
                    <Footer />
                </div>
            </div>
        </article>
    );
}

export default Tweet;
