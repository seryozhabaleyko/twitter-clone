import React from 'react';
import Avatar from 'antd/lib/avatar';
import { UserOutlined } from '@ant-design/icons';

import { Tweet as TweetProps } from '../../store/types/tweets';
import Header from './Header';
import Footer from './Footer';

import './Tweet.scss';

function Tweet({ text, user }: TweetProps) {
    return (
        <article className="tweet">
            <div className="tweet__inner">
                <div className="tweet__avatar">
                    <Avatar src={user.avatarUrl} size={49} icon={<UserOutlined />} />
                </div>
                <div className="tweet__content">
                    <Header {...user} />
                    <div className="tweet__text">
                        <div className="txt">{text}</div>
                    </div>
                    <Footer />
                </div>
            </div>
        </article>
    );
}

export default Tweet;
