import React from 'react';

import Navbar from '../Navbar';

import './Header.scss';

function Header(): React.ReactElement {
    return (
        <header className="header">
            <Navbar />
        </header>
    );
}

export default Header;
