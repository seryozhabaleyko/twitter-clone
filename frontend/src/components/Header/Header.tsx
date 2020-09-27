import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';
import Account from '../Account';
import Button from '../Button';

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div style={{ position: 'fixed', top: '0px', height: '100%' }}>
                    <div
                        style={{
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '275px',
                            height: '100%',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <div>
                            <Logo />
                            <Nav />
                            <div style={{ width: '90%', margin: '5px 0 5px 0' }}>
                                <Button />
                            </div>
                        </div>
                        <div>
                            <Account />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
