import React from 'react';
import Avatar from 'antd/lib/avatar';
import { UserOutlined } from '@ant-design/icons';

import { Tweet as TweetProps } from '../../store/types/tweets';
import Header from './Header';
import Footer from './Footer';

import './Tweet.scss';
import { Link } from 'react-router-dom';
import Photos from './Photos';

function Tweet({ _id, text, user }: TweetProps) {
    return (
        <article className="tweet">
            <Link to={`/${user.username}/tweet/${_id}`}>
                <div className="tweet__inner">
                    <div className="tweet__avatar">
                        <Avatar src={user.avatarUrl} size={49} icon={<UserOutlined />} />
                    </div>
                    <div className="tweet__content">
                        <Header {...user} />
                        <div className="tweet__text">
                            <div className="txt">{text}</div>
                        </div>
                        <Photos />
                        <Footer />
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default Tweet;
