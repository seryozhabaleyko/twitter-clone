import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { Tweet as TweetProps } from '../../store/types/tweets';
import Header from './Header';
import Text from './Text';
import Photos from './Photos';
import Footer from './Footer';

import './Tweet.scss';

function Tweet({ text, user }: TweetProps) {
    return (
        <article className="tweet">
            <div className="tweet__inner">
                <div className="tweet__avatar">
                    <Avatar
                        src={user.avatarUrl}
                        alt={user.fullname}
                        style={{ height: 49, width: 49 }}
                    />
                </div>
                <div className="tweet__content">
                    <Header {...user} />
                    <Text text={text} />
                    <Photos />
                    <Footer />
                </div>
            </div>
        </article>
    );
}

export default Tweet;
