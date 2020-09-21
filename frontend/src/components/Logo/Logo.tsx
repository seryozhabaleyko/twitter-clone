import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterOutlined } from '@ant-design/icons';

import './Logo.scss';

function Logo() {
    return (
        <h1 className="logo">
            <Link to="/home">
                <TwitterOutlined className="logo__img" />
            </Link>
        </h1>
    );
}

export default Logo;
