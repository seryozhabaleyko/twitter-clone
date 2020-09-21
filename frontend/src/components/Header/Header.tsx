import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <div
                    style={{
                        position: 'fixed',
                        top: '0px',
                        height: '100%',
                    }}
                >
                    <div
                        style={{
                            overflowY: 'auto',
                            width: '275px',
                            height: '100%',
                        }}
                    >
                        <Logo />
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
