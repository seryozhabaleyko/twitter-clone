import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

interface NavItem {
    title: string;
    slug: string;
    icon: any;
}

function NavItem({ title, slug, icon }: NavItem) {
    return (
        <NavLink className="nav-link" to={slug} exact>
            <div className="nav-item">
                <div className="nav-item-icon">{icon}</div>
                <div className="nav-item-title">{title}</div>
            </div>
        </NavLink>
    );
}

export default NavItem;
