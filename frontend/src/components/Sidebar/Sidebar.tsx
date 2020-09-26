import React from 'react';

import Search from '../Search';
import Topics from '../Topics';
import Recommended from '../Recommended';
import Footer from '../Footer';

import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__inner">
                <Search />
                <div style={{ height: '53px' }}></div>
                <Topics />
                <Recommended />
                <Footer />
            </div>
        </div>
    );
}

export default Sidebar;
