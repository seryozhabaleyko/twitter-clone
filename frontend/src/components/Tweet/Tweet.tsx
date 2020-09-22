import React from 'react';
import Avatar from 'antd/lib/avatar';
import { UserOutlined } from '@ant-design/icons';

import Header from './Header';
import Footer from './Footer';

import './Tweet.scss';

function Tweet() {
    return (
        <article className="tweet">
            <div className="tweet__inner">
                <div className="tweet__avatar">
                    <Avatar size={49} icon={<UserOutlined />} />
                </div>
                <div className="tweet__content">
                    <Header />
                    <div className="tweet__text">
                        <div className="txt">
                            Оказывается кто-то запутался в своем же коде и рандомно именовал
                            переменную penguinSize как pinguinSize, попутно её определив и просто,
                            использовав то одно название, то другое при одинаковой логике. Ох
                            сколько времени на это ушло
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </article>
    );
}

export default Tweet;
