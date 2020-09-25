import React from 'react';

import Search from '../Search';
import Topics from '../Topics';
import Subscribe from '../Subscribe';

import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <Search />
            <Topics />
            <Subscribe />
        </div>
    );
}

export default Sidebar;
