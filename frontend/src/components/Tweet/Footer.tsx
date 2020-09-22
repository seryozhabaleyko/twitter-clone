import React from 'react';
import Button from 'antd/lib/button';
import { CommentOutlined, HeartOutlined, RetweetOutlined, UploadOutlined } from '@ant-design/icons';

function Footer() {
    const iconsProps = { style: { fontSize: '1.25em', color: 'rgb(101, 119, 134)' } };

    return (
        <footer className="tweet__footer">
            <div className="tweet-button tweet-button-comments">
                <div>
                    <Button type="text" shape="circle" icon={<CommentOutlined {...iconsProps} />} />
                </div>
                <div className="tweet-button__count">2</div>
            </div>
            <div className="tweet-button">
                <div>
                    <Button type="text" shape="circle" icon={<RetweetOutlined {...iconsProps} />} />
                </div>
                <div className="tweet-button__count">45</div>
            </div>
            <div className="tweet-button">
                <div>
                    <Button type="text" shape="circle" icon={<HeartOutlined {...iconsProps} />} />
                </div>
                <div className="tweet-button__count"></div>
            </div>
            <div className="tweet-button">
                <div>
                    <Button type="text" shape="circle" icon={<UploadOutlined {...iconsProps} />} />
                </div>
                <div className="tweet-button__count"></div>
            </div>
        </footer>
    );
}

export default Footer;
