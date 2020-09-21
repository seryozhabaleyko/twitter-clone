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
        <NavLink className="nav__link" to={slug} exact>
            <div className="nav__item">
                <div className="nav-item__icon">{icon}</div>
                <div className="nav-item__title">{title}</div>
            </div>
        </NavLink>
    );
}

export default NavItem;
