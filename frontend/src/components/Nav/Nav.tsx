import React from 'react';
import { TwitterOutlined } from '@ant-design/icons';

import NavItem from './NavItem';

import './Nav.scss';

const navList = [
    {
        id: 1,
        title: 'Главная',
        slug: '/home',
        icon: <TwitterOutlined style={{ fontSize: '2rem' }} />,
    },
    {
        id: 2,
        title: 'Поиск',
        slug: '/search',
        icon: <TwitterOutlined style={{ fontSize: '2rem' }} />,
    },
    {
        id: 3,
        title: 'Уведомления',
        slug: '/notifications',
        icon: <TwitterOutlined style={{ fontSize: '2rem' }} />,
    },
    {
        id: 4,
        title: 'Сообщения',
        slug: '/messages',
        icon: <TwitterOutlined style={{ fontSize: '2rem' }} />,
    },
    {
        id: 5,
        title: 'Закладки',
        slug: '/bookmarks',
        icon: <TwitterOutlined style={{ fontSize: '2rem' }} />,
    },
    {
        id: 6,
        title: 'Списки',
        slug: '/seryozhabaleyko/lists',
        icon: <TwitterOutlined style={{ fontSize: '2rem' }} />,
    },
    {
        id: 7,
        title: 'Профиль',
        slug: '/seryozhabaleyko',
        icon: <TwitterOutlined style={{ fontSize: '2rem' }} />,
    },
    { id: 8, title: 'Еще', slug: '#', icon: <TwitterOutlined style={{ fontSize: '2rem' }} /> },
];

function Nav() {
    return (
        <nav className="nav">
            {navList.map(({ id, title, icon, slug }) => (
                <NavItem key={id} title={title} slug={slug} icon={icon} />
            ))}
        </nav>
    );
}

export default Nav;
